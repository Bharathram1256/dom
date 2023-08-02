var head2 = document.getElementById("head1");
var head3 = document.getElementById("head2");
head2.addEventListener('mouseover',function(){
    head2.innerText = "Heading Heading";
    head2.style.cursor='pointer';
    head2.style.color='red';
})
head2.addEventListener('mouseout',function(){
    head2.innerText = "Heading";
    head2.style.cursor='pointer';
    head2.style.color='pink';
})
head3.addEventListener('mouseover',function(){
    head3.innerText = "Heading Heading";
    head3.style.cursor='pointer';
    head3.style.color='blue';
})
head3.addEventListener('mouseout',function(){
    head3.innerText = "Heading ";
    head3.style.cursor='pointer';
    head3.style.color='yellow';
})