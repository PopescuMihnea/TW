// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// Aplicatia
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// Create GPU
app.post("/GPUs", (req, res) => {
  let GPUsList = readJSONFileGPUs();
  let newGPU=req.body;
  newGPU.id=uuidv4();
  GPUsList.push(newGPU);
  writeJSONFileGPUs(GPUsList);
  res.send(GPUsList);
});

// Read One GPU
app.get("/GPUs/:id", (req, res) => {
  const GPUsList = readJSONFileGPUs();
  let found=false;
  for (let x of GPUsList)
     if (x.id==req.params.id)
     {
          res.send(JSON.stringify(x));
          found =true;
     }
     if (!found)
     res.send("err");   
});

// Read All GPU
app.get("/GPUs", (req, res) => {
  const GPUsList = readJSONFileGPUs();
  res.send(GPUsList);
});

// Update GPU
app.put("/GPUs/:id", (req, res) => {
  const GPUsList = readJSONFileGPUs();
  for (let i=0;i<GPUsList.length;++i)
    if (GPUsList[i].id==req.params.id)
    {
        GPUsList[i].VRAM=req.body.VRAM;
        GPUsList[i].nume=req.body.nume;
        GPUsList[i].pret=req.body.pret;
        GPUsList[i].consum=req.body.consum;
        GPUsList[i].img=req.body.img;
        break;
    }
      writeJSONFileGPUs(GPUsList);
      res.send(GPUsList);
});

// Delete GPU
app.delete("/GPUs/:id", (req, res) => {
  let GPUsList = readJSONFileGPUs();
  for (let i=0;i<GPUsList.length;++i)
    if (GPUsList[i].id==req.params.id)
    {
      GPUsList.splice(i,1);
        break;
    }
    writeJSONFileGPUs(GPUsList);
  res.send(GPUsList);
});

// Functia de citire din fisierul db.json
function readJSONFileGPUs() {
  return JSON.parse(fs.readFileSync("../server proiect/db.json"))["GPUs"];
}

// Functia de scriere in fisierul db.json
function writeJSONFileGPUs(content) {
  fs.writeFileSync(
    "../server proiect/db.json",
    JSON.stringify({ GPUs: content, CPUs: JSON.parse(fs.readFileSync("../server proiect/db.json"))["CPUs"]}),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

// Create CPU
app.post("/CPUs", (req, res) => {
  let CPUsList = readJSONFileCPUs();
  let newCPU=req.body;
  newCPU.id=uuidv4();
  CPUsList.push(newCPU);
  writeJSONFileCPUs(CPUsList);
  res.send(CPUsList);
});

// Read One CPU
app.get("/CPUs/:id", (req, res) => {
  const CPUsList = readJSONFileCPUs();
  let found=false;
  for (let x of CPUsList)
     if (x.id==req.params.id)
     {
          res.send(JSON.stringify(x));
          found =true;
     }
     if (!found)
     res.send("err");   
});

// Read All CPU
app.get("/CPUs", (req, res) => {
  const CPUsList = readJSONFileCPUs();
  res.send(CPUsList);
});

// Update CPU
app.put("/CPUs/:id", (req, res) => {
  const CPUsList = readJSONFileCPUs();
  for (let i=0;i<CPUsList.length;++i)
    if (CPUsList[i].id==req.params.id)
    {
      CPUsList[i].GHz=req.body.GHz;
      CPUsList[i].socket=req.body.socket;
      CPUsList[i].nume=req.body.nume;
      CPUsList[i].pret=req.body.pret;
      CPUsList[i].consum=req.body.consum;
      CPUsList[i].img=req.body.img;
        break;
    }
      writeJSONFileCPUs(CPUsList);
      res.send(CPUsList);
});

// Delete CPU
app.delete("/CPUs/:id", (req, res) => {
  let CPUsList = readJSONFileCPUs();
  for (let i=0;i<CPUsList.length;++i)
    if (CPUsList[i].id==req.params.id)
    {
      CPUsList.splice(i,1);
        break;
    }
    writeJSONFileCPUs(CPUsList);
  res.send(CPUsList);
});

// Functia de citire din fisierul db.json
function readJSONFileCPUs() {
  return JSON.parse(fs.readFileSync("../server proiect/db.json"))["CPUs"];
}

// Functia de scriere in fisierul db.json
function writeJSONFileCPUs(content) {
  fs.writeFileSync(
    "../server proiect/db.json",
    JSON.stringify({ GPUs: JSON.parse(fs.readFileSync("../server proiect/db.json"))["GPUs"], CPUs: content}),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

// Pornim server-ul
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);