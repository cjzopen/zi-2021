# zi-2021
  
``
<svg viewBox="0 0 42 42" class="donut">  
  <circle class="donut-hole" cx="21" cy="21" r="16" fill="#fff"></circle>  
  <circle class="donut-ring" cx="21" cy="21" r="16" fill="transparent" stroke="#d2d3d4" stroke-width="4"></circle>  
  <circle class="donut-segment donut-segment-1" cx="21" cy="21" r="16" stroke-dasharray="40 60" stroke-dashoffset="25"></circle>  
  <circle class="donut-segment donut-segment-2" cx="21" cy="21" r="16" stroke-dasharray="20 80" stroke-dashoffset="85"></circle>  
  <circle class="donut-segment donut-segment-3" cx="21" cy="21" r="16" stroke-dasharray="30 70" stroke-dashoffset="65"></circle>  
</svg>  
``
  
偏移量 = dashoffset  
公式：周長 - 所有先前分段的總長度 + 第一分段的偏移量 = 當前分段的偏移量  
上述的說明如下：  
全長為 100  
第一段佔 40%，因為它是從3點鐘方向開始，要回偏25%回12點鐘的地方，所以偏移量= 25(25%)  
第二段佔 20%，偏移量 = 100 - 40 + 25  
第三段佔 30%，偏移量 = 100 - (40+20) + 25  
  
