<h2>temperature exchange tool</h2>

<p>
This is a temperature exchange tool, which users can exchange from Fahrenheit to Celsius, and from Celsius to Fahrenheit.
</p>

<li>Introduction - the project's aim</li>
<li>Technologies</li>
<li>Launch</li>


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

<a href="https://bricklai.github.io/temperature/converter.html">Click here</a> to exchange the temperature

<h3>Reference</h3>
<p><a href="https://en.wikipedia.org/wiki/Fahrenheit">Fahrenheit</a></p>
<p><a href="https://en.wikipedia.org/wiki/Celsius">Celsius</a></p>
<p><a href="https://www.w3schools.com/jsref/prop_node_innertext.asp">innerText</a></p>
<p><a href="https://www.w3schools.com/js/js_if_else.asp">if else</a></p>
