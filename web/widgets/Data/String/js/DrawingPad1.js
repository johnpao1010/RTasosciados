var dataString ='<chart manageResize="1" bgColor="E1F5FF">\n\
<annotations>\n\
<annotationGroup id="Grp1" >\n\
<annotation type="rectangle" x="30" y="100" toX="110" toY="220" radius="5" color="453269" />\n\
<annotation type="rectangle" x="235" y="100" toX="315" toY="220" radius="5" color="453269" />\n\
<annotation type="rectangle" x="440" y="100" toX="520" toY="220" radius="5" color="453269" />\n\
</annotationGroup>\n\
<annotationGroup id="Grp2" >\n\
<annotation type="text" x="70" y="155" fontSize="12" bold="1" label="Chart" color="FFFFFF"/>\n\
<annotation type="text" x="275" y="140" fontSize="12" bold="1" label="Scripts" color="FFFFFF"/>\n\
<annotation type="text" x="275" y="170" label="ASP/PHP/.NET/.. pages" color="EFEBF5" wrap="1" wrapWidth="60"/>\n\
<annotation type="text" x="480" y="155" fontSize="12" bold="1" label="Database" color="FFFFFF"/>\n\
</annotationGroup>\n\
<annotationGroup id="Grp3" >\n\
<annotation type="text" x="70" y="65" label="1. HTML provides the URL of XML data document to chart" wrap="1" wrapWidth="100" color="453269"/>\n\
<annotation type="text" x="170" y="130" label="2. Chart sends a request to the specified URL for XML data" wrap="1" wrapWidth="100" color="453269"/>\n\
<annotation type="text" x="380" y="130" label="3. These pages now interact with the database" wrap="1" wrapWidth="100" color="453269"/>\n\
<annotation type="text" x="380" y="200" label="4. Data returned back to the scripts in native objects" wrap="1" wrapWidth="100" color="453269"/>\n\
<annotation type="text" x="275" y="255" label="5. Scripts convert it into XML and finally output it" wrap="1" wrapWidth="100" color="453269"/>\n\
<annotation type="text" x="170" y="200" label="6. XML data is returned to the chart" wrap="1" wrapWidth="100" color="453269"/>\n\
<annotation type="text" x="70" y="250" label="7. Chart is finally rendered" wrap="1" wrapWidth="100" color="453269"/>\n\
</annotationGroup>\n\
<annotationGroup id="Grp4">\n\
<!--arrow for process 2-->\n\
<annotation type="line" x="120" y="160" toX="220" color="453269" />\n\
<annotation type="line" x="215" y="155" toX="220" toY="160" color="453269" />\n\
<annotation type="line" x="215" y="165" toX="220" toY="160" color="453269" />\n\
<!--arrow for process 6-->\n\
<annotation type="line" x="120" y="175" toX="220" color="453269" />\n\
<annotation type="line" x="125" y="170" toX="120" toY="175" color="453269" />\n\
<annotation type="line" x="125" y="180" toX="120" toY="175" color="453269" />\n\
<!--arrow for process 3-->\n\
<annotation type="line" x="325" y="155" toX="435" color="453269" />\n\
<annotation type="line" x="430" y="150" toX="435" toY="155" color="453269" />\n\
<annotation type="line" x="430" y="160" toX="435" toY="155" color="453269" />\n\
<!--arrow for process 4-->\n\
<annotation type="line" x="325" y="170" toX="435" color="453269" />\n\
<annotation type="line" x="330" y="165" toX="325" toY="170" color="453269" />\n\
<annotation type="line" x="330" y="175" toX="325" toY="170" color="453269" />\n\
</annotationGroup>\n\
<annotationGroup id="Grp5">\n\
<annotation type="text" label="Data URL method" fontSize="16" fontColor="666666" bold="1" x="270" y="20"/>\n\
</annotationGroup>\n\
</annotations>\n\
<styles>\n\
<definition>\n\
<style name="Shadow1" type="shadow" distance="7"/>\n\
<style name="Shadow2" type="shadow" strength="3"/>\n\
<style name="Shadow3" type="shadow" alpha="0"/>\n\
<style name="Anim1" type="animation" param="_x" start="-50" wait="0" duration="1" easing="Bounce"/>\n\
<style name="Anim2" type="animation" param="_y" start="-30" wait="1" duration="1" easing="Bounce"/>\n\
<style name="Anim3" type="animation" param="_xScale" start="0" end="100" wait="2" duration="0.5"/>\n\
<style name="Anim4" type="animation" param="_alpha" start="0" wait="2" duration="1"/>\n\
<style name="Anim5" type="animation" param="_y" start="-50" wait="2" duration="1"/>\n\
</definition>\n\
<application>\n\
<apply toObject="Grp1" styles="Shadow1, Anim1"/>\n\
<apply toObject="Grp2" styles="Shadow2, Anim2"/>\n\
<apply toObject="Grp3" styles="Shadow3,Anim5"/>\n\
<apply toObject="Grp4" styles="Anim3, Anim4"/>\n\
</application>\n\
</styles>\n\
</chart>';