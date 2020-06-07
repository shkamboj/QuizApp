<!DOCTYPE html>
<!DOCTYPE html>
<html>
<body>
<div>
<h1>Multiple Choice Questions.</h1>
  <ul class="employees">
  <% for(var i=0; i<Quizq.length; i++) {%>
    <li class="employees">
      <span><%= "Roll.: " + Quizq[i].q1 + ", "%></span>
      <span><%="Email Add: " + Quizq[i].q11%></span>
    </li>
  <% } %>
</ul>
</ul>
</div>
</body>
</html>