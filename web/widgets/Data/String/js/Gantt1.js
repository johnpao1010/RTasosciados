var dataString ='<chart manageResize="1" showTaskNames="1" dateFormat="dd/mm/yyyy" toolTipBgColor="FFFFFF" toolTipBorderColor="333333" ganttLineColor="99CC00" ganttLineAlpha="20" baseFontColor="333333" gridBorderColor="99CC00" taskBarRoundRadius="4" showShadow="0" chartLeftMargin="1" chartBottomMargin="1"  chartTopMargin="1"  chartRightMargin="1" >\n\
	<categories  bgColor="333333" fontColor="99cc00" isBold="1" fontSize="14" >\n\
		<category start="1/9/2010" end="31/12/2010" label="2010" />\n\
		<category start="1/1/2011" end="31/7/2011" label="2011" />\n\
	</categories>\n\
	<categories  bgColor="99cc00" bgAlpha="40" fontColor="333333" align="center" fontSize="10" isBold="1">\n\
		<category start="1/9/2010" end="30/9/2010" label="Sep" />\n\
		<category start="1/10/2010" end="31/10/2010" label="Oct" />\n\
		<category start="1/11/2010" end="30/11/2010" label="Nov" />\n\
		<category start="1/12/2010" end="31/12/2010" label="Dec" />\n\
		<category start="1/1/2011" end="31/1/2011" label="Jan" />\n\
		<category start="1/2/2011" end="28/2/2011" label="Feb" />\n\
		<category start="1/3/2011" end="31/3/2011" label="Mar" />\n\
		<category start="1/4/2011" end="30/4/2011" label="Apr"  />\n\
		<category start="1/5/2011" end="31/5/2011" label="May" />\n\
		<category start="1/6/2011" end="30/6/2011" label="Jun" />\n\
		<category start="1/7/2011" end="31/7/2011" label="Jul" />\n\
	</categories>\n\
	<processes positionInGrid="right" align="center" headerText="Leader" fontColor="333333" fontSize="10" isBold="1" isAnimated="1" bgColor="99cc00" headerbgColor="333333" headerFontColor="99CC00" headerFontSize="14" bgAlpha="40">\n\
		<process label="Mark" id="1" />\n\
		<process label="Tom" id="2" />\n\
		<process label="David" id="3" />\n\
		<process label="Alan" id="4" />\n\
		<process label="Adam" id="5" />\n\
		<process label="Peter" id="6" />\n\
	</processes>\n\
	<dataTable fontColor="333333" fontSize="10" isBold="1" headerFontColor="000000" >\n\
		<dataColumn headerbgColor="333333" width="150" headerfontSize="14" headerAlign="left" headerfontcolor="99cc00"  bgColor="99cc00" headerText=" Team" align="left" bgAlpha="65">\n\
			<text label="MANAGEMENT" />\n\
			<text label="PRODUCT MANAGER" />\n\
			<text label="CORE DEVELOPMENT" />\n\
			<text label="Q &amp; A / DOC." />\n\
			<text label="WEB TEAM" />\n\
			<text label="MANAGEMENT" />\n\
		</dataColumn>\n\
	</dataTable>\n\
	<tasks  width="10" >\n\
		<task label="Survey" toolText="Market Survey" processId="1" start="7/9/2010" end="10/10/2010" id="Srvy" color="99cc00" alpha="60"  />\n\
 		<task label="Concept" toolText= "Develop Concept for Product" processId="1" start="25/10/2010" end="9/11/2010" id="Cpt1" color="99cc00" alpha="60"  topPadding="25"/>\n\
	 	<task label="Concept" showLabel="0" toolText="Develop Concept for Product" processId="2" start="25/10/2010" end="9/11/2010" id="Cpt2" color="99cc00" alpha="60"  />\n\
		<task label="Design" toolText= "Preliminary Design" processId="2" start="12/11/2010" end="01/12/2010" id="Desn" color="99cc00" alpha="60"/>\n\
		<task label="  Product Development" processId="2" start="16/12/2010" end="2/3/2011" id="PD1" color="99cc00" alpha="60" topPadding="35"/>\n\
		<task label="Product Development" processId="3" start="16/12/2010" end="2/3/2011" id="PD2" color="99cc00" alpha="60" />\n\
		<task label="Doc Outline" toolText="Documentation Outline" processId="2" start="6/4/2011" end="1/5/2011" id="DocOut" color="99cc00" alpha="60"/>\n\
		<task label="Alpha" toolText="Alpha Release" processId="4" start="15/3/2011" end="2/4/2011" id="alpha" color="99cc00" alpha="60"/>\n\
		<task label="Beta" toolText="Beta Release" processId="3" start="10/5/2011" end="2/6/2011" id="Beta" color="99cc00" alpha="60"/>\n\
		<task label="Doc." toolText="Documentation" processId="4" start="12/5/2011" end="29/5/2011" id="Doc" color="99cc00" alpha="60"/>\n\
		<task label="Website Design" toolText="Website Design" processId="5" start="18/5/2011" end="22/6/2011" id="Web" color="99cc00" alpha="60"/>\n\
		<task label="Release  " toolText="Product Release" processId="6" start="5/7/2011" end="20/7/2011" id="Rls" color="99cc00" alpha="60"/>\n\
		<task label=" Fix" toolText="Development on Beta Feedback" processId="3" start="10/6/2011" end="1/7/2011" id="Dvlp" color="99cc00" alpha="60"/>\n\
		<task label="QA" toolText="QA Testing" processId="4" start="9/4/2011" end="22/4/2011" id="QA1" color="99cc00" alpha="60"/>\n\
  		<task label="QA2" toolText="QA Testing-Phase 2" processId="4" start="25/6/2011" end="5/7/2011" id="QA2" color="99cc00" alpha="60"/>\n\
	</tasks>\n\
	<connectors color="99cc00" thickness="2" >\n\
		<connector fromTaskId="Cpt1" toTaskId="Cpt2" fromTaskConnectStart="1"/>\n\
		<connector fromTaskId="PD1" toTaskId="PD2" fromTaskConnectStart="1"/>\n\
		<connector fromTaskId="PD1" toTaskId="alpha" />\n\
		<connector fromTaskId="PD2" toTaskId="alpha" />\n\
		<connector fromTaskId="DocOut" toTaskId="Doc" />\n\
		<connector fromTaskId="QA1" toTaskId="beta" />\n\
		<connector fromTaskId="Dvlp" toTaskId="QA2" />\n\
		<connector fromTaskId="QA2" toTaskId="Rls" />\n\
	</connectors>\n\
	<milestones>\n\
		<milestone date="20/7/2011" taskId="Rls" radius="10" color="333333" shape="Star" numSides="5" borderThickness=".5"/>\n\
		<milestone date="2/3/2011" taskId="PD1" radius="10" color="333333" shape="Star" numSides="5" borderThickness=".5" />\n\
		<milestone date="2/3/2011" taskId="PD2" radius="10" color="333333" shape="Star" numSides="5" borderThickness=".5"/>\n\
	</milestones>\n\
</chart>';