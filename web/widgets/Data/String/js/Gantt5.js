var dataString ='<chart manageResize="1" dateFormat="dd/mm/yyyy" outputDateFormat="ddds mns yy" ganttWidthPercent="65" canvasBorderColor="999999" canvasBorderThickness="0" gridBorderColor="4567aa" gridBorderAlpha="20" ganttPaneDuration="3" ganttPaneDurationUnit="m" >\n\
<categories  bgColor="009999">\n\
	<category start="1/3/2008" end="31/8/2008" label="Residential Construction"  fontColor="ffffff" fontSize="16" />\n\
</categories>\n\
<categories  bgColor="4567aa" fontColor="ff0000">\n\
	<category start="1/3/2008" end="31/8/2008" label="Months"  alpha="" font="Verdana" fontColor="ffffff" fontSize="16" />\n\
</categories>\n\
<categories  bgColor="ffffff" fontColor="1288dd" fontSize="10" isBold="1" align="center">\n\
	<category start="1/3/2008" end="31/3/2008" label="March" />\n\
	<category start="1/4/2008" end="30/4/2008" label="April" />\n\
	<category start="1/5/2008" end="31/5/2008" label="May" />\n\
	<category start="1/6/2008" end="30/6/2008" label="June" />\n\
	<category start="1/7/2008" end="31/7/2008" label="July" />\n\
	<category start="1/8/2008" end="31/8/2008" label="August" />\n\
</categories>\n\
<processes headerText="Task" fontColor="000000" fontSize="11" isAnimated="1" bgColor="4567aa"  headerVAlign="bottom" headerAlign="left" headerbgColor="4567aa" headerFontColor="ffffff" headerFontSize="12"  align="left" isBold="1" bgAlpha="25">\n\
	<process label="Writing" id="1" />\n\
	<process label="Signing" id="2" />\n\
	<process label="Financing" id="3" />\n\
	<process label="Permission" id="4" />\n\
	<process label="Plumbing" id="5" />\n\
	<process label="Terrace" id="6" />\n\
	<process label="Inspection" id="7" />\n\
	<process label="Wood Work" id="8" />\n\
	<process label="Interiors" id="9" />\n\
	<process label="Shifting" id="10" />\n\
</processes>\n\
<dataTable showProcessName="1" nameAlign="left" fontColor="000000" fontSize="10" vAlign="right" align="center" headerVAlign="bottom" headerAlign="left" headerbgColor="4567aa" headerFontColor="ffffff" headerFontSize="12" >\n\
	<dataColumn bgColor="eeeeee" headerText="Start" >\n\
		<text label="7/3/2008" />\n\
		<text label="6/4/2008" />\n\
		<text label="1/5/2008" />\n\
		<text label="13/5/2008" />\n\
		<text label="2/5/2008" />\n\
		<text label="1/6/2008" />\n\
		<text label="15/6/2008" />\n\
		<text label="22/6/2008" />\n\
		<text label="18/6/2008" />\n\
		<text label="15/7/2008" />\n\
	</dataColumn>\n\
	<dataColumn bgColor="eeeeee" headerText="Finish">\n\
		<text label="22/4/2008" />\n\
		<text label="12/5/2008" />\n\
		<text label="2/6/2008" />\n\
		<text label="19/6/2008" />\n\
		<text label="19/6/2008" />\n\
		<text label="19/7/2008" />\n\
		<text label="11/8/2008" />\n\
		<text label="5/8/2008" />\n\
		<text label="22/7/2008" />\n\
		<text label="11/8/2008" />\n\
	</dataColumn>\n\
	<dataColumn bgColor="eeeeee" headerText="Hrs">\n\
		<text label="150" />\n\
		<text label="340" />\n\
		<text label="60" />\n\
		<text label="20" />\n\
		<text label="30" />\n\
		<text label="45" />\n\
		<text label="40" />\n\
		<text label="102" />\n\
		<text label="60" />\n\
		<text label="30" />\n\
		<text label="90" />\n\
		<text label="30" />\n\
	</dataColumn>\n\
	<dataColumn align="right" bgColor="4567aa" bgAlpha="25" headerText="Cost" isBold="1">\n\
		<text label="$4100" />\n\
		<text label="$8290" />\n\
		<text label="$12340" />\n\
		<text label="$2330" />\n\
		<text label="$4550" />\n\
		<text label="$15720" />\n\
		<text label="$1780" />\n\
		<text label="$32330" />\n\
		<text label="$9890" />\n\
		<text label="$1110" />\n\
		<text label="$1260" />\n\
		<text label="$4260" />\n\
	</dataColumn>\n\
</dataTable>\n\
<tasks>\n\
	<task label="Planned" processId="1" start="7/3/2008" end="18/4/2008" id="1-1" color="4567aa" height="32%" topPadding="12%" />\n\
	<task label="Actual" processId="1" start="9/3/2008" end="22/4/2008" id="1" color="EEEEEE" alpha="100"  topPadding="56%" height="32%" />\n\
	<task label="Planned" processId="8" start="22/6/2008" end="29/7/2008" id="2-1" color="4567aa" alpha="100"  height="32%" topPadding="12%" />\n\
	<task label="Actual" processId="8" start="22/6/2008" end="5/8/2008" id="2" color="EEEEEE" alpha="100"  height="32%" topPadding="56%" percentComplete="78"/>\n\
	<task label="Planned" processId="2" start="6/4/2008" end="2/5/2008" id="3-1" color="4567aa" height="32%" topPadding="12%" />\n\
	<task label="Actual" processId="2" start="6/4/2008" end="12/5/2008" id="3" color="EEEEEE" alpha="100"  isAnimated="1" height="32%" topPadding="56%"/>\n\
	<task label="Planned" processId="9" start="18/6/2008" end="21/7/2008" id="4-1" color="4567aa" height="32%" topPadding="12%" />\n\
	<task label="Actual" processId="9" start="18/6/2008" end="22/7/2008" id="4" color="EEEEEE" alpha="100"  isAnimated="1" height="32%" topPadding="56%"/>\n\
	<task label="Planned" processId="3" start="1/5/2008" end="2/6/2008" id="5-1" color="4567aa" height="32%" topPadding="12%" />\n\
	<task label="Actual" processId="3" start="1/5/2008" end="2/6/2008" id="5" color="EEEEEE" height="32%" topPadding="56%"/>\n\
	<task label="Planned" processId="4" start="11/5/2008" end="12/6/2008" id="6-1" color="4567aa" height="32%" topPadding="12%" />\n\
  	<task label="Actual" processId="4" start="13/5/2008" end="19/6/2008" id="6" color="EEEEEE"  height="32%" topPadding="56%"/>\n\
	<task label="Planned" processId="5" start="1/5/2008" end="12/6/2008" id="7-1" color="4567aa" height="32%" topPadding="12%" />\n\
  	<task label="Actual" processId="5" start="2/5/2008" end="19/6/2008" id="7" color="EEEEEE"  height="32%" topPadding="56%"/>\n\
	<task label="Planned" processId="6" start="1/6/2008" end="12/7/2008" id="8-1" color="4567aa" height="32%" topPadding="12%" />\n\
  	<task label="Actual" processId="6" start="1/6/2008" end="19/7/2008" Id="8" color="EEEEEE" height="32%" topPadding="56%" percentComplete="91"/>\n\
	<task label="Planned" processId="7" start="11/6/2008" end="7/8/2008" Id="9-1" color="4567aa" height="32%" topPadding="12%" />\n\
  	<task label="Actual" processId="7" start="15/6/2008" end="11/8/2008" Id="9" color="EEEEEE" height="32%" topPadding="56%"/>\n\
	<task label="Planned" processId="10" start="11/7/2008" end="7/8/2008" Id="10-1" color="4567aa" height="32%" topPadding="12%" />\n\
  	<task label="Actual" processId="10" start="15/7/2008" end="11/8/2008" Id="10" color="EEEEEE" height="32%" topPadding="56%"/>\n\
</tasks>\n\
<connectors>\n\
	<connector fromTaskId="3" toTaskId="5" color="4567aa" thickness="2" fromTaskConnectStart="1"/>\n\
	<connector fromTaskId="8" toTaskId="2" color="4567aa" thickness="2" fromTaskConnectStart="1"/>\n\
</connectors>\n\
<milestones>\n\
	<milestone date="7/8/2008" taskId="10-1" color="2E4472" shape="star" toolText="Original moving date" />\n\
	<milestone date="21/8/2008" taskId="10" color="999999" shape="star" toolText="New estimated moving date" />\n\
</milestones>\n\
<legend>\n\
        <item label="Planned" color="4567aa" />\n\
        <item label="Actual" color="999999" />\n\
        <item label="Slack (Delay)" color="FF5E5E" />\n\
</legend>\n\
<styles>\n\
        <definition>\n\
                <style type="Font" name="legendFont" size="12" />\n\
        </definition>\n\
        <application>\n\
                <apply toObject="LEGEND" styles="legendFont" />\n\
        </application>\n\
</styles>\n\
</chart>';