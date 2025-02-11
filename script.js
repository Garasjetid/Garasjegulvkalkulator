{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <script>\
function calculateTiles() \{\
  const width = document.getElementById('width').value;\
  const depth = document.getElementById('depth').value;\
  \
  if (width <= 0 || depth <= 0) \{\
    document.getElementById('result').textContent = 'Vennligst oppgi gyldige m\'e5l.';\
    return;\
  \}\
  \
  const tileSize = 30;  // Flisens st\'f8rrelse i cm\
  const widthTiles = Math.ceil((width * 100) / tileSize);\
  const depthTiles = Math.ceil((depth * 100) / tileSize);\
  const totalTiles = widthTiles * depthTiles;\
\
  document.getElementById('result').textContent = `Antall fliser: $\{totalTiles\}`;\
\}\
\
document.getElementById('calculateButton').addEventListener('click', calculateTiles);\
</script>}