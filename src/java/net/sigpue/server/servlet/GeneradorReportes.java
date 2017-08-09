
package net.sigpue.server.servlet;

import java.io.ByteArrayOutputStream;
import java.sql.Connection;
import java.util.HashMap;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sigpue.server.informe.Report;

/**
 *
 * @author Jhontan Alexander Peña. jpena@cltech.net. All rights reserved. CLTech 2013
 */
public class GeneradorReportes 
{
    public void generadorReportes(HttpServletRequest request, HttpServletResponse response, String plantilla, HashMap parameters, Connection conn)
    {
        ByteArrayOutputStream stream = null;
        String formatReport = request.getParameter("formatR");
        Report report = new Report();

        if (formatReport.equals("pdf"))
        {
            stream = report.GeneradorReport_PDF(plantilla, parameters, conn);
            response.setContentType("application/pdf");
        }
        else if (formatReport.equals("html"))
        {
            stream = report.GeneradorReport_HTML(plantilla, parameters, conn, request, response);
            //parameters.put("BaseDir", new File(getServletConfig().getServletContext().getRealPath("/Reportes/")));
            //stream = u.GenerarReporte_HTML(getServletConfig().getServletContext().getRealPath(request.getParameter("ReportPath")), parameters, request);
            response.setContentType("text/html");
        }
        else if (formatReport.equals("xml"))
        {
            stream = report.GeneradorReport_XML(plantilla, parameters, conn);
            response.setContentType("application/xml");
        }
        else if (formatReport.equals("xls"))
        {
            stream = report.GeneradorReport_XLS(plantilla, parameters, conn);
            response.setContentType("application/vnd.ms-excel");
        }
        else if (formatReport.equals("txt"))
        {
            stream = report.GeneradorReport_XLS(plantilla, parameters, conn);
            response.setContentType("application/vnd.ms-excel");
        }


        //Genera respuesta de reporte

        if (stream != null)
        {
            try
            {
                byte[] fileData = stream.toByteArray();
                //response.setHeader("Content-Disposition", "attachment; filename=\""+request.getParameter("Name")+"\";");
                response.setHeader("Content-Disposition", "inline; filename=\"ReportEngine."+formatReport+"\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);

                /* response.setHeader("Expires", "0");
                response.setHeader("Cache-Control", "must-revalidate, post-check=0, pre-check=0");
                response.setHeader("Pragma", "public");
                response.setHeader("Content-Disposition", "attachment;filename=_blank_");*/


                response.setContentLength(fileData.length);

                ServletOutputStream servletOutputStream = response.getOutputStream();
                servletOutputStream.write(fileData, 0, fileData.length);
                servletOutputStream.flush();
                servletOutputStream.close();
            }
            catch (Exception e)
            {
                System.err.println(" Error al Generar Reporte: " + e);
            }
        }
        else
        {
            System.out.println("Error al Generar Reporte: stream = null ");
        }
    }
}
