<!DOCTYPE html>
<html>
<head>
  <style>
    .photo-wrapper {
      width: 200px;
      height: 250px;
      margin: 50px auto;
      border-radius: 50% / 40%;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .photo-wrapper:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    }

    .photo-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
</head>
<body>

  <div class="photo-wrapper">
    <img src="https://i.postimg.cc/3x3QzSGq/m.png" alt="Oval Image">
  </div>

</body>
</html>
