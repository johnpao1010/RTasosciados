package net.sigpue.server.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author jpena - Jhonatan Alexander Peña. jpena@cltech.net.
 * CLTech - Clinical Laboratory Technology
 * All rights reserved. CLTech 2013
 *
 */
public class GraphicEngine extends HttpServlet 
{

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {   
        PrintWriter out = null;
        try 
        {
            System.out.println("GraphicEngine ==> "+Integer.parseInt(request.getParameter("id")));
            switch (Integer.parseInt(request.getParameter("id")))
            {
                case 1: 
                        response.setContentType("text/html;charset=UTF-8");
                        out = response.getWriter();
                        out.println("<html><head><script type='text/javascript' src='resources/chart/FusionChartsXT/FusionCharts.js'></script></head><body><center><div id='chartContainer'>Gráfica aquí</div><script type='text/javascript'>"
                                + "var myChart = new FusionCharts('resources/chart/FusionChartsXT/Column3D.swf','myChartId', '800', '500', '0', '1' );"
                                + "myChart.setXMLUrl('resources/chart/FusionChartsXT/data/weekly-sales.xml');"
                                + "myChart.render('chartContainer');"
                                + "</script></center></body></html>");
                        break;
                
                case 2: 
                        response.setContentType("text/html;charset=UTF-8");
                        out = response.getWriter();
                        out.println("<html><head><script type='text/javascript' src='resources/chart/FusionChartsXT/FusionCharts.js'></script></head><body><center><div id='chartContainer'>Gráfica aquí</div><script type='text/javascript'>"
                                + "var myChart = new FusionCharts('resources/chart/FusionChartsXT/MSCombi3D.swf','myChartId', '800', '500', '0', '1' );"
                                + "myChart.setXMLUrl('resources/chart/FusionChartsXT/data/SiteHitsPerHour.xml');"
                                + "myChart.render('chartContainer');"
                                + "</script></center></body></html>");
                        break;
                        
               case 3: 
                        response.setContentType("text/html;charset=UTF-8");
                        out = response.getWriter();
                        out.println("<html><head><script type='text/javascript' src='resources/chart/FusionChartsXT/FusionCharts.js'></script></head><body><center><div id='chartContainer'>Gráfica aquí</div><script type='text/javascript'>"
                                + "var myChart = new FusionCharts('resources/chart/FusionChartsXT/Pie2D.swf','myChartId', '800', '500', '0', '1' );"
                                + "myChart.setXMLUrl('resources/chart/FusionChartsXT/data/AirlineDelayCauses.xml');"
                                + "myChart.render('chartContainer');"
                                + "</script></center></body></html>");
                        break;
               case 4: 
                        response.setContentType("text/html;charset=UTF-8");
                        out = response.getWriter();
                        out.println("<html><head><script type='text/javascript' src='resources/chart/FusionChartsXT/FusionCharts.js'></script></head><body><center><div id='chartContainer'>Gráfica aquí</div><script type='text/javascript'>"
                                + "var myChart = new FusionCharts('resources/chart/FusionChartsXT/Pie3D.swf','myChartId', '800', '500', '0', '1' );"
                                + "myChart.setXMLUrl('resources/chart/FusionChartsXT/data/SalesPerEmployeeYear.xml');"
                                + "myChart.render('chartContainer');"
                                + "</script></center></body></html>");
                        break;
               case 5: 
                        response.setContentType("text/html;charset=UTF-8");
                        out = response.getWriter();
                        out.println("<html><head><script type='text/javascript' src='resources/chart/FusionChartsXT/FusionCharts.js'></script></head><body><center><div id='chartContainer'>Gráfica aquí</div><script type='text/javascript'>"
                                + "var myChart = new FusionCharts('resources/chart/FusionChartsXT/MSLine.swf','myChartId', '800', '500', '0', '1' );"
                                + "myChart.setXMLUrl('resources/chart/FusionChartsXT/data/SiteHitsPerHour2.xml');"
                                + "myChart.render('chartContainer');"
                                + "</script></center></body></html>");
                        break;
               case 6: 
                        response.setContentType("text/html;charset=UTF-8");
                        out = response.getWriter();
                        out.println("<html><head><script type='text/javascript' src='resources/chart/FusionChartsXT/FusionCharts.js'></script></head><body><center><div id='chartContainer'>Gráfica aquí</div><script type='text/javascript'>"
                                + "var myChart = new FusionCharts('resources/chart/FusionChartsXT/MSCombi3D.swf','myChartId', '800', '500', '0', '1' );"
                                + "myChart.setXMLUrl('resources/chart/FusionChartsXT/data/VisitsfromSearchEngines.xml');"
                                + "myChart.render('chartContainer');"
                                + "</script></center></body></html>");
                        break;
                    

                default:
                        response.setContentType("text/html;charset=UTF-8");
                        out = response.getWriter();
                        out.println("<html>");
                        out.println("<head>");
                        out.println("<title>Servlet GraphicEngine</title>");
                        out.println("</head>");
                        out.println("<body>");
                        out.println("<h1>Servlet GraphicEngine at " + request.getContextPath() + "</h1>");
                        out.println("</body>");
                        out.println("</html>");
            }
        }
        catch(Exception ex)
        {
            Logger.getLogger(GraphicEngine.class.getName()).log(Level.SEVERE, null, ex);
        }
        finally
        {
            if (out != null)
            {
                out.close();
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
