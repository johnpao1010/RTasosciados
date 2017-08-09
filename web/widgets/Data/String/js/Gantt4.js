var dataString ='<chart manageResize="1" canvasBgColor="F1F1FF, FFFFFF"  canvasBgAngle="90" dateFormat="dd/mm/yyyy" ganttLineColor="0372AB" ganttLineAlpha="8" gridBorderColor="0372AB" canvasBorderColor="0372AB" showShadow="0">\n\
<categories bgColor="0372AB">\n\
		<category start="1/1/2005" end="4/2/2005" label="Machine Operation Sheet" fontColor="FFFFFF" />\n\
</categories>\n\
<categories bgAlpha="0">\n\
		<category start="1/1/2005" end="7/1/2005" label="Week 1" />\n\
		<category start="8/1/2005" end="14/1/2005" label="Week 2" />\n\
		<category start="15/1/2005" end="21/1/2005" label="Week 3" />\n\
		<category start="22/1/2005" end="28/1/2005" label="Week 4"/>\n\
		<category start="29/1/2005" end="4/2/2005" label="Week 5"/>\n\
</categories>\n\
<processes isBold="1" headerbgColor="0372AB" fontColor="0372AB" bgColor="FFFFFF" >\n\
		<process label="Machine A" id="A"  />\n\
		<process label="Machine B" id="B" />\n\
		<process label="Machine C" id="C" />\n\
		<process label="Machine D" id="D" />\n\
		<process label="Machine E" id="E" />\n\
		<process label="Machine F" id="F" />\n\
		<process label="Machine G" id="G" />\n\
		<process label="Machine H" id="H" />\n\
</processes>\n\
<tasks >\n\
		<task label="In Use" processId="A" start="1/1/2005" end="13/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Idle" processId="A" start="13/1/2005" end="18/1/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="A" start="18/1/2005" end="27/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Repair" processId="A" start="27/1/2005" end="29/1/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="In Use" processId="A" start="29/1/2005" end="4/2/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Idle" processId="B" start="1/1/2005" end="7/1/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="B" start="7/1/2005" end="18/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Repair" processId="B" start="18/1/2005" end="24/1/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="In Use" processId="B" start="24/1/2005" end="4/2/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Idle" processId="C" start="1/1/2005" end="14/1/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="C" start="14/1/2005" end="3/2/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Idle" processId="C" start="3/2/2005" end="4/2/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="Repair" processId="D" start="1/1/2005" end="7/1/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="Idle" processId="D" start="7/1/2005" end="11/1/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="D" start="11/1/2005" end="27/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Repair" processId="D" start="27/1/2005" end="4/2/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="Idle" processId="E" start="1/1/2005" end="18/1/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="E" start="18/1/2005" end="3/2/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Idle" processId="E" start="3/2/2005" end="4/2/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="F" start="1/1/2005" end="8/1/2005" taskId="B" borderColor="FF654F" color="FF654F"  />\n\
		<task label="Repair" processId="F" start="8/1/2005" end="11/1/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="In Use" processId="F" start="11/1/2005" end="18/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Repair" processId="F" start="18/1/2005" end="21/1/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="Idle" processId="F" start="21/1/2005" end="4/2/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="G" start="1/1/2005" end="13/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Idle" processId="G" start="13/1/2005" end="20/1/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="G" start="20/1/2005" end="27/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Repair" processId="G" start="27/1/2005" end="4/2/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="In Use" processId="H" start="1/1/2005" end="8/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Idle" processId="H" start="8/1/2005" end="18/1/2005" taskId="B" borderColor="8BBA00" color="8BBA00" />\n\
		<task label="In Use" processId="H" start="18/1/2005" end="27/1/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
		<task label="Repair" processId="H" start="27/1/2005" end="29/1/2005" taskId="B" borderColor="F6BD0F" color="F6BD0F" />\n\
		<task label="In Use" processId="H" start="29/1/2005" end="4/2/2005" taskId="B" borderColor="FF654F" color="FF654F" />\n\
</tasks>\n\
<connectors>\n\
		<connector fromTaskId="2" toTaskId="1"  color="" alpha="" thickness="" isDotted="" />\n\
</connectors>\n\
<legend>\n\
	<item label="In use" color="FF654F" />\n\
	<item label="Repair" color="F6BD0F" />\n\
	<item label="Idle" color="8BBA00" />\n\
</legend>\n\
</chart>';