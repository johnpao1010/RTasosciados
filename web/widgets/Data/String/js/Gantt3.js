var dataString ='<chart manageResize="1" dateFormat="dd/mm/yyyy" ganttWidthPercent="70" gridBorderAlpha="0" showTaskNames="1" paletteThemeColor="453269">\n\
<categories>\n\
	<category start="1/1/2005" end="31/5/2005" label="Development Life Cycle" isBold="1" fontSize="16" />\n\
</categories>\n\
<categories isBold="1">\n\
	<category start="1/1/2005" end="31/1/2005" label="January" />\n\
	<category start="1/2/2005" end="28/2/2005" label="February" />\n\
	<category start="1/3/2005" end="31/3/2005" label="March" />\n\
	<category start="1/4/2005" end="30/4/2005" label="April"/>\n\
	<category start="1/5/2005" end="31/5/2005" label="May" />\n\
</categories>\n\
<processes headerText="Tasks" headeralign="left" bgColor="453269" headerBgColor="453269" fontColor="FFFFFF" headerFontColor="FFFFFF" isBold="1" headerFontSize="16" align="left">\n\
	<process label="Get Data" id="1" />\n\
	<process label="Get Approval" id="2" />\n\
	<process label="Identification Details" id="3" />\n\
	<process label="Design" id="4" />\n\
	<process label="Coding" id="5" />\n\
	<process label="Develop Improvement" id="6" />\n\
	<process label="Implementation" id="7" />\n\
	<process label="Testing" id="8" />\n\
</processes>\n\
<dataTable showProcessName="1" nameAlign="left" headerFontSize="16" headerFontIsBold="1">\n\
</dataTable>\n\
	<tasks>\n\
	<task label="Dept. 1" processId="1" start="6/1/2005" end="24/1/2005" Id="1" color="453269" sborderColor="453269"/>\n\
	<task label="Dept. 1" processId="2" start="6/2/2005" end="24/2/2005" Id="2" color="453269" sborderColor="453269"/>\n\
	<task label="Dept. 1" processId="3" start="5/3/2005" end="18/4/2005" Id="3" color="453269" borderColor="453269" showBorder="1"/>\n\
	<task label="Dept. 2" processId="4" start="18/2/2005" end="24/3/2005" Id="4" color="cccccc" borderColor="cccccc"/>\n\
	<task label="Dept. 2" processId="5" start="15/1/2005" end="5/3/2005" Id="6" color="cccccc" borderColor="cccccc"/>\n\
	<task label="Dept. 2" processId="2" start="21/3/2005" end="10/5/2005" Id="7" color="cccccc" borderColor="cccccc"/>\n\
	<task label="Dept. 3" processId="8" start="7/4/2005" end="26/5/2005" Id="8" width="12" color="66499C" borderColor="66499C"/>\n\
  	<task label="Dept. 3" processId="7" start="13/3/2005" end="19/4/2005" Id="9" width="12" borderColor="66499C" color="66499C"/>\n\
  	<task label="Dept. 3" processId="6" start="13/1/2005" end="19/2/2005" Id="10" width="12" borderColor="66499C" color="66499C"/>\n\
</tasks>\n\
<connectors>\n\
	<connector fromTaskId="1" toTaskId="2" thickness="2"/>\n\
	<connector fromTaskId="6" toTaskId="9" thickness="2"/>\n\
	<connector fromTaskId="10" toTaskId="8" thickness="2" />\n\
</connectors>\n\
<milestones>\n\
	<milestone date="6/1/2005" taskId="1" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="24/1/2005" taskId="1" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="6/2/2005" taskId="2" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="5/3/2005" taskId="3" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="18/2/2005" taskId="4" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="24/3/2005" taskId="4" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="18/4/2005" taskId="3" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="15/1/2005" taskId="6" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="5/3/2005" taskId="6" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="24/2/2005" taskId="2" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="21/3/2005" taskId="7" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="10/5/2005" taskId="7" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="7/4/2005" taskId="8" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="26/5/2005" taskId="8" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="13/3/2005" taskId="9" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="19/4/2005" taskId="9" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="13/1/2005" taskId="10" radius="5" color="333333" borderColor="FFFFFF" shape="Polygon" numSides="4" borderThickness="1"/>\n\
	<milestone date="19/2/2005" taskId="10" radius="5" color="FFCC33" borderColor="333333" shape="Polygon" numSides="4" borderThickness="1"/>\n\
</milestones>\n\
</chart>';