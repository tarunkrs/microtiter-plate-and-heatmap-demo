# 1536-well Microtiter Plate & Heatmap

### Overview
This React.js web application allows users to upload a CSV file and visualize the data as a heatmap. The application provides an interactive interface for users to explore and analyze the data efficiently.

## Features

- **Docker Compatibility**: Quickly build and deploy the application using Docker.
- **CSV File Integration**: Sample CSV files are available under /Sample CSV/*.
- **Dynamic Heatmaps**: Experience intuitive data visualization through interactive heatmaps.

### CSV File Sample 

### microtiter_plate_data.csv
```text
WellID,Metric1,Metric2,Metric3,Metadata1,Metadata2
A01,0.12,0.34,0.56,Sample1,Control
A02,0.14,0.36,0.58,Sample2,Treated
A03,0.16,0.38,0.6,Sample3,Control
A04,0.18,0.4,0.62,Sample4,Treated
A05,0.2,0.42,0.64,Sample5,Control
A06,0.22,0.44,0.66,Sample6,Treated
A07,0.24,0.46,0.68,Sample7,Control
A08,0.26,0.48,0.7,Sample8,Treated
A09,0.28,0.5,0.72,Sample9,Control
A10,0.3,0.52,0.74,Sample10,Treated
B01,0.32,0.54,0.76,Sample11,Control
B02,0.34,0.56,0.78,Sample12,Treated
B03,0.36,0.58,0.8,Sample13,Control
B04,0.38,0.6,0.82,Sample14,Treated
B05,0.4,0.62,0.84,Sample15,Control
B06,0.42,0.64,0.86,Sample16,Treated
B07,0.44,0.66,0.88,Sample17,Control
B08,0.46,0.68,0.9,Sample18,Treated
B09,0.48,0.7,0.92,Sample19,Control
B10,0.5,0.72,0.94,Sample20,Treated
P47,0.52,0.74,0.96,Sample1535,Control
P48,0.54,0.76,0.98,Sample1536,Treated
```

## Prerequisites

- NodeJS v18.17.1
- npm 10.8.1
- Docker 4.29.0

## Getting Started

### Manul Installation

### Clone the repository:

- git clone [PATH](https://github.com/phptarun/Microtiter-Plate-And-Heatmap.git)

### Once clone is successful, to install required modules

- Run > **cd Microtiter-Plate-And-Heatmap**
- Run > **npm install** to install the dependencies

### To run the application

- Run > **npm start** to start the application
- Once server is up, now you are able to view the application at [http://localhost:3000](http://localhost:3000)

### Installation using Docker

### Clone the repository:

- git clone [PATH](https://github.com/phptarun/Microtiter-Plate-And-Heatmap.git)

### Once clone is successful, nevigate to respective dir

- Run > **cd Microtiter-Plate-And-Heatmap**
- Run > **docker build -t Microtiter-Plate-And-Heatmap .** to create the build
- Once build is created successfully, now you are able to view the application at [http://localhost:3000](http://localhost:3000)

## License

This project is licensed under the MIT License. For more information, refer to the LICENSE file.
