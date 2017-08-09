/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.server.servlet;

import java.io.IOException;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author jpena
 */
public class ImageServlet extends HttpServlet 
{
    

	/**
	 *
	 */
	public void service(
		HttpServletRequest request,
		HttpServletResponse response
		) throws IOException, ServletException
	{
		Map imagesMap = (Map)request.getSession().getAttribute("IMAGES_MAP");

		if (imagesMap != null)
		{
			String imageName = request.getParameter("image");
			if (imageName != null)
			{
				byte[] imageData = (byte[])imagesMap.get(imageName);

				response.setContentLength(imageData.length);
				ServletOutputStream ouputStream = response.getOutputStream();
				ouputStream.write(imageData, 0, imageData.length);
				ouputStream.flush();
				ouputStream.close();
			}
		}
	}
}
