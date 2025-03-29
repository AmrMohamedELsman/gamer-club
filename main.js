et visitCount = localStorage.getItem("menuVisitCount") || 0;
 visitCount++;
 localStorage.setItem("menuVisitCount", visitCount);
 document.getElementById("visitorCount").innerText = visitCount;
