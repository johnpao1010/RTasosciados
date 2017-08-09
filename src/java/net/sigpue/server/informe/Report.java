package net.sigpue.server.informe;

/**
 * Implementación para Reporte (Soporte para reportes IReport)
 * Contiene la implementación de los métodos para generación de reportes
 * @version 1.0, 2012
 * @author Ing. de la Peña
 *
 */

import java.io.ByteArrayOutputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRExporter;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.export.JExcelApiExporter;
import net.sf.jasperreports.engine.export.JRHtmlExporter;
import net.sf.jasperreports.engine.export.JRHtmlExporterParameter;
import net.sf.jasperreports.engine.export.JRXlsExporter;
import net.sf.jasperreports.engine.export.JRXlsExporterParameter;
import net.sf.jasperreports.engine.util.JRLoader;

public class Report
{
    public ByteArrayOutputStream GeneradorReport_PDF(String URL_Jasper,HashMap parameters, Connection conn)
    {
        try
        {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            JasperReport reporte = (JasperReport) JRLoader.loadObject(URL_Jasper);

            JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, parameters, conn);
            JasperExportManager.exportReportToPdfStream(jasperPrint, bos);
            return bos;
        }
        catch (Exception e)
        {
             Logger.getLogger(Report .class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }

     public ByteArrayOutputStream  GeneradorReport_HTML(String plantilla,HashMap parameters, Connection conn,HttpServletRequest request, HttpServletResponse response)
    {
        try
        {
            JasperPrint jasperPrint = JasperFillManager.fillReport(plantilla, parameters, conn);
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            Map imagesMap = new HashMap();
            request.getSession().setAttribute("IMAGES_MAP", imagesMap);

            final JRHtmlExporter exporter1 = new JRHtmlExporter();
            exporter1.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
            exporter1.setParameter(JRExporterParameter.OUTPUT_STREAM, bos);
            exporter1.setParameter(JRHtmlExporterParameter.IS_USING_IMAGES_TO_ALIGN, Boolean.FALSE);
            exporter1.setParameter(JRHtmlExporterParameter.IMAGES_MAP, imagesMap);
            exporter1.setParameter(JRHtmlExporterParameter.IMAGES_URI, request.getContextPath() + "/image?image=");
            exporter1.exportReport();
            response.setContentType("text/html");

            byte[] fileData = bos.toByteArray();

            response.setHeader("Content-Disposition", "inline; filename=\"" + "ReportEngine" + "\";");//request.getParameter("Name")
            response.setHeader("Cache-Control", "no-cache");
            response.setHeader("Pragma", "no-cache");
            response.setDateHeader("Expires", 0);
            response.setContentLength(fileData.length);
            ServletOutputStream servletOutputStream = response.getOutputStream();
            servletOutputStream.write(fileData, 0, fileData.length);
            servletOutputStream.flush();
            servletOutputStream.close();

            return null;
        }
        catch (Exception e)
        {
             Logger.getLogger(Report .class.getName()).log(Level.SEVERE, null, e);
             return null;
        }
    }

     public ByteArrayOutputStream GeneradorReport_XLS(String URL_Jasper,HashMap parameters, Connection conn)
    {
        try
        {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();

            JasperPrint jasperPrint = JasperFillManager.fillReport(URL_Jasper, parameters, conn);
            JExcelApiExporter exporter = new JExcelApiExporter();
            exporter.setParameter(JRXlsExporterParameter.JASPER_PRINT, jasperPrint);
            exporter.setParameter(JRXlsExporterParameter.IS_ONE_PAGE_PER_SHEET, Boolean.TRUE);
            exporter.setParameter(JRXlsExporterParameter.IS_DETECT_CELL_TYPE, Boolean.TRUE);
            exporter.setParameter(JRXlsExporterParameter.IS_WHITE_PAGE_BACKGROUND, Boolean.FALSE);
            exporter.setParameter(JRXlsExporterParameter.IS_REMOVE_EMPTY_SPACE_BETWEEN_ROWS, Boolean.TRUE);
            exporter.setParameter(JRXlsExporterParameter.OUTPUT_STREAM, bos);
            exporter.exportReport();

            return bos;
        }
        catch (Exception e)
        {
             Logger.getLogger(Report .class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }

    public ByteArrayOutputStream GeneradorReport_XML(String URL_Jasper,HashMap parameters, Connection conn)
    {
        try
        {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            JasperReport reporte = (JasperReport) JRLoader.loadObject(URL_Jasper);

            JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, parameters, conn);
            JasperExportManager.exportReportToXmlStream(jasperPrint, bos);

            return bos;
        }
        catch (Exception e)
        {
             Logger.getLogger(Report .class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }
}
