<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gradient Buttons</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
        }
        h1 {
            margin-bottom: 20px;
        }
        .btn {
            display: inline-block;
            padding: 15px 30px;
            margin: 10px;
            font-size: 16px;
            color: #fff;
            text-decoration: none;
            border-radius: 30px;
            transition: background 0.3s ease;
        }
        .btn-features {
            background: linear-gradient(45deg, #ff6b6b, #ff9a9e);
        }
        .btn-dashboard {
            background: linear-gradient(45deg, #42e695, #3bb2b8);
        }
        .btn-contact {
            background: linear-gradient(45deg, #a18cd1, #fbc2eb);
        }
        .btn:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Page</h1>
        <a href="#" class="btn btn-features">Features</a>
        <a href="#" class="btn btn-dashboard">Dashboard</a>
        <a href="#" class="btn btn-contact">Contact</a>
    </div>
</body>
</html>
