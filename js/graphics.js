$(document).ready(function(){

	$("#chart-pizza").highcharts({
	    	chart: {
	    		plotBackgroundColor: null,
	    		plotBorderWidth: null,
	    		plotShadow: false
	    	},
	    	title: {
	    		text: 'Vendas por Produto'
	    	},
	    	tooltip: {
	    		pointFormat: '{series.name}:<br>{point.percentage:.1f}%'
	    	},
	    	plotOptions: {
	    		pie: {
	    			allowPointSelect: true,
	    			cursor: 'pointer',
	    			dataLabels: {
	    				enabled: false,
	    				format: '<br>{point.name}:<br>{point.percentage:.1f}%',
	    				color: 'black'
	    			},
	    			showInLegend: true
	    		}
	    	},
	    	series: [{
	    		type: 'pie',
	    		name: 'Venda Produto',
	    		data: [
	    			['Notebook', 45],
	    			['Desktop', 25],
	    			['Chromebook', 10],
	    			{
	    				name: 'Macbook',
	    				y: 16,
	    			},
	    			['Outros', 3.86]
	    		]
	    	}]
    });

    $("#chart-linha").highcharts({
    	title: {
    		text: 'Vendas por Semestre',
    		x: -20
    	},
    	subtitle: {
    		text: 'Fonte: RootShape.com',
    		x: -20
    	},
    	xAxis: {
    		categories: ['Jan','Fev','Mar','Abr','Mai','Jun']
    	},
    	yAxis: {
    		title: {
    			text: 'Valor das Vendas'
    		},
    		plotLines: [{
    			value: 0,
    			width: 1,
    			color: 'black'
    		}]
    	},
    	tooltip: {
    		valueSuffix: ' Reais'
    	},
    	legend: {
    		layout:'horizontal',
    		align: 'left',
    		verticalAlign: 'bottom',
    		borderWidth: 0
    	},
    	series: [
    		{
    			name: 'Notebook',
    			data: [2590, 3690, 4200, 3350, 3900, 3700]
    		},
    		{
    			name: 'Desktop',
    			data: [1850, 2730, 2780, 2960, 2650, 3120]
    		},
    		{
    			name: 'Chromebook',
    			data: [930, 1200, 1030, 146, 890, 1290]
    		},
    		{
    			name: 'Macbook',
    			data: [2290, 2480, 1400, 2800, 3270, 1795]
    		},
    		{
    			name: 'Outros',
    			data: [2360, 2500, 2945, 1890, 1990, 2770]
    		}
    	]
    });
});