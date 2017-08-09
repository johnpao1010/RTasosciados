var dataString ='<chart manageResize="1" dateFormat="dd/mm/yyyy" ganttLineColor="CCCCCC" ganttLineAlpha="20" gridBorderAlpha="20" showTaskNames="1" toolTipBgColor="F1F1F1" toolTipBorderColor="333333" paletteThemeColor="333333">\n\
<categories bgColor="333333" baseFont="Arial" baseFontCOlor="FFFFFF" baseFontSize="12" >\n\
	<category start="1/1/2005" end="31/5/2005" align="center" label="Sales Territory Assignment" fontColor="ffffff" isBold="1" fontSize="16" />\n\
</categories>\n\
<categories font="Arial" fontColor="ffffff" isBold="1" fontSize="12" bgColor="333333">\n\
	<category start="1/1/2005" end="31/1/2005" label="January"  />\n\
	<category start="1/2/2005" end="28/2/2005" label="February"  />\n\
	<category start="1/3/2005" end="31/3/2005" label="March" />\n\
	<category start="1/4/2005" end="30/4/2005" label="April"/>\n\
	<category start="1/5/2005" end="31/5/2005" label="May" />\n\
</categories>\n\
<processes headerbgColor="333333" fontColor="ffffff" fontSize="12" bgColor="333333" align="right" >\n\
	<process label="Tom" id="1"  />\n\
	<process label="Harry" id="2" />\n\
	<process label="Mary" id="4" />\n\
	<process label="Mike" id="3" />\n\
</processes>\n\
<tasks  color="" alpha="" font="" fontColor="" fontSize="" isAnimated="1">\n\
	<task label="North" processId="1" start="3/1/2005" end="4/2/2005" Id="1_1" color="e1f5ff" borderColor="AFD8F8"/>\n\
	<task label="East" processId="1" start="6/2/2005" end="24/3/2005" Id="1_2" color="e1f5ff" borderColor="AFD8F8"/>\n\
	<task label="Vacation" processId="1" start="25/3/2005" end="18/4/2005" Id="1_3" color="e1f5ff" borderColor="AFD8F8" height="2" showBorder="1"/>\n\
	<task label="South" processId="1" start="18/4/2005" end="24/5/2005" Id="1_4" color="e1f5ff" borderColor="AFD8F8"/>\n\
	<task label="South" processId="2" start="15/1/2005" end="5/3/2005" Id="2_1" color="F6BD0F" borderColor="F6BD0F"/>\n\
	<task label="West" processId="2" start="21/3/2005" end="10/5/2005" Id="2_2" color="F6BD0F" borderColor="F6BD0F"/>\n\
	<task label="Global" processId="3" start="7/1/2005" end="26/5/2005" Id="3_1" width="12" color="8BBA00" borderColor="8BBA00"/>\n\
  	<task label="South" processId="4" start="13/2/2005" end="19/4/2005" Id="4_1" width="12" color="FF654F" borderColor="FF654F" />\n\
</tasks>\n\
<connectors>\n\
	<connector fromTaskId="1_2" toTaskId="2_2" color="AFD8F8" thickness="2"/>\n\
	<connector fromTaskId="2_1" toTaskId="4_1" color="F7CB41" thickness="2"/>\n\
</connectors>\n\
</chart>';