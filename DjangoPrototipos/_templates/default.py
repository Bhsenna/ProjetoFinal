{% load static%}
<!DOCTYPE html >
<html lang = "en" >
<head >
<meta charset = "UTF-8" >
<title> { % block title%}{%endblock%} </title >
    {% block styles % }{%endblock%}
    {% block script % }{%endblock%}
    <link rel = "stylesheet" href = "{% static 'css/styles.css'%}" >
</head >
<body >
{% block content%}{%endblock%}
</body >
</html >