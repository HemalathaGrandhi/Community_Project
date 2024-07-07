google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Pie Chart Data and Options
    var pieData = google.visualization.arrayToDataTable([
        ['Impact', 'per 100 percent'],
        ['Positive',      46],
        ['Negative',      14],
        ['Neutral',       20],
        ['N/A',           20]
    ]);
    var pieOptions = {
        title: 'COUNT OF IMPACT'
    };
    var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
    pieChart.draw(pieData, pieOptions);

    // Bar Chart Data and Options
    var barData = google.visualization.arrayToDataTable([
        ['Frequency', 'Count'],
        ['Daily', 20],
        ['Weekly', 11],
        ['Never', 9],
        ['Rarely', 8]
    ]);
    var barOptions = {
        title: 'FREQUENCY DISTRIBUTION',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
            title: 'Frequency',
            minValue: 0,
        },
        vAxis: {
            title: 'Count'
        }
    };
    var barChart = new google.visualization.BarChart(document.getElementById('chart_div'));
    barChart.draw(barData, barOptions);
}
/* ================================= typing animation ====================================*/
var typed = new Typed(".typing",{
    strings: ["", "G. Hemalatha", "K.BhavyaSri", "A.Srilatha"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})
/* ================================= Aside ====================================*/
const nav = document.querySelector(".nav"),
      navList =nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
        {
            const a = navList[i].querySelector("a");
            a.addEventListener("click",function()
            {
                removeBackSection();
                for(let j=0; j<totalNavList; j++)
                    {
                        if(navList[j].querySelector("a").classList.contains("active"))
                        {
                            addBackSection(j);
                           // allSection[j].classList.add("back-section");
                        }
                        navList[j].querySelector("a").classList.remove("active");
                    }    
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth < 1200)
                {
                    asideSectionTogglerBtn();
                }
            })
        }  
        function removeBackSection()
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
        }
        function addBackSection(num)
        {
            allSection[num].classList.add("back-section");
        }    
        function showSection(element)
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }
        function updateNav(element)
        {
            for(let i=0; i<totalNavList; i++)
            {
                navList[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
            }
        }
        document.querySelector(".hire-me").addEventListener("click", function()
        {
            const sectionIndex =this.getAttribute("data-section-index");
           // console.log(sectionIndex);
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
        })
        const navTogglerBtn = document.querySelector(".nav-toggler"),
              aside = document.querySelector(".aside");
              navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }
     
