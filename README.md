<h2>Temperature exchange tool</h2>

<li>Introduction - the project's aim</li>
<li>Technologies</li>
<li>Key Code</li>
<li>UI Page</li>
<li>Launch</li>
<li>Reference</li>

<h3>Introduction - the project's aim</h3>
<p>
    This is a temperature exchange tool, which users can exchange from Fahrenheit to Celsius, and from Celsius to Fahrenheit. Input a valid number of temperature, choose one method and click the convert button, then the valid temperature will be exchanged to an equal. For example, if you input 100, and choose to Celsius,it will replies an equal 100F = 37.78C.
</p>
<p>
Also, press the modes button, it will change between the light mode and the dark mode.
</p>

<h3>Technologies</h3>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>

<h3>key Code</h3>
chooseOne.addEventListener('click', function() {
    if(chooseOne.checked){
        chooseTwo.checked = false;
    }
});

chooseTwo.addEventListener('click', function() {
    chooseOne.checked = false;
})

```
convert.addEventListener('click', () => {
    let a = num.value.trim();
    if (a == isNaN) {
        let outPut = 'please enter a valid number';
        result.innerText = outPut;
    } 
    else if(chooseOne.checked) {
        let outPut = 32 + a * 1.8;
        result.innerText = `${a}C = ${outPut.toFixed(2)}F`;
    } else if(chooseTwo.checked) {
        let outPut = (a - 32) / 1.8;
        result.innerText = `${a}F = ${outPut.toFixed(2)}C`;

    }
});
```

<h3>UI Page</h3>
<img src="assets/img/UI Page.png">



<h3>Launch</h3>
<p>This tool is launched already, users can click the link to use it.</p>
<a href="https://bricklai.github.io/temperature/converter.html">Click here</a> to exchange the temperature

<h3>Reference</h3>
<p><a href="https://en.wikipedia.org/wiki/Fahrenheit">Fahrenheit</a></p>
<p><a href="https://en.wikipedia.org/wiki/Celsius">Celsius</a></p>
<p><a href="https://www.w3schools.com/jsref/prop_node_innertext.asp">innerText</a></p>
<p><a href="https://www.w3schools.com/js/js_if_else.asp">if else</a></p>
