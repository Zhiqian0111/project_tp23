const express = require('express');
const cors = require('cors');
const app = express();

// 假设数据存储在一个数组里面
const carData = [
  { brand: 'Toyota', carbon: 150 },
  { brand: 'Honda', carbon: 160 },
  { brand: 'Ford', carbon: 170 },
  { brand: 'Tesla', carbon: 0 }
];

// 允许跨域请求
app.use(cors());

// 返回所有品牌的 API
app.get('/brands', (req, res) => {
  const brands = carData.map(car => car.brand);
  res.json(brands);
});

// 返回某个品牌的碳排放量的 API
app.get('/carbon/:brand', (req, res) => {
  const brand = req.params.brand;
  const car = carData.find(car => car.brand === brand);
  if (car) {
    res.json(car.carbon);
    console.log(car.carbon);
  } else {
    res.status(404).send('Not Found');
  }
});

// 启动服务器
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
