<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css">
    <style>
    body {
        padding: 48px;
    }
    </style>
    <title>Document</title>
</head>
<body>
<div id="app">
    <!-- <input type="text" :value="coupon" @input="coupon = $event.target.value"> -->
    <coupon v-model="coupon"></coupon>
</div>


       <script src="/js/app.js"></script>
  
</body>
</html>