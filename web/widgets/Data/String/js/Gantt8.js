var dataString ='<chart manageResize="1" palette="2" caption="Construction Timeline" dateFormat="dd/mm/yyyy" outputDateFormat="ddds mns" >\n\
   <categories>\n\
      <category start="1/5/2008" end="31/8/2008" label="Months" />\n\
   </categories>\n\
   <categories>\n\
      <category start="1/5/2008" end="31/5/2008" label="May" />\n\
      <category start="1/6/2008" end="30/6/2008" label="June" />\n\
      <category start="1/7/2008" end="31/7/2008" label="July" />\n\
      <category start="1/8/2008" end="31/8/2008" label="August" />\n\
   </categories>\n\
   <processes headerText="Task" headerFontSize="16" fontSize="12" >\n\
      <process label="Terrace" id="TRC" />\n\
      <process label="Inspection" id="INS" />\n\
      <process label="Wood Work" id="WDW" />\n\
      <process label="Interiors" id="INT" />\n\
   </processes>\n\
   <tasks showEndDate="1">\n\
      <task processId="TRC" start="5/5/2008" end="2/6/2008" id="5-1" color="4567aa" height="25%" topPadding="20%" />\n\
      <task processId="TRC" start="10/5/2008" end="2/6/2008" id="5" color="EEEEEE" height="25%" topPadding="55%"/>\n\
      <task processId="INS" start="11/5/2008" end="12/6/2008" id="6-1" color="4567aa" height="25%" topPadding="20%" />\n\
      <task processId="INS" start="13/5/2008" end="19/6/2008" id="6" color="EEEEEE" height="25%" topPadding="55%"/>\n\
      <task processId="WDW" start="1/6/2008" end="12/7/2008" id="7-1" color="4567aa" height="25%" topPadding="20%" />\n\
      <task processId="WDW" start="2/6/2008" end="19/7/2008" id="7" color="EEEEEE" height="25%" topPadding="55%"/>\n\
      <task processId="INT" start="1/6/2008" end="12/8/2008" id="8-1" color="4567aa" height="25%" topPadding="20%" />\n\
      <task processId="INT" start="1/6/2008" end="15/8/2008" Id="8" color="EEEEEE" height="25%" topPadding="55%" />\n\
   </tasks>\n\
   <legend>\n\
      <item label="Planned" color="4567aa" />\n\
      <item label="Actual" color="999999" />\n\
   </legend>\n\
   <styles>\n\
      <definition>\n\
         <style type="font" name="legendFont" size="13" />\n\
      </definition>\n\
      <application>\n\
         <apply toObject="Legend" styles="legendFont" />\n\
      </application>\n\
   </styles>\n\
</chart>';