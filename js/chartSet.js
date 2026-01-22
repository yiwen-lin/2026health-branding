	var ctxSex = $("#chart-sex");
	var myChart = new Chart(ctxSex, {
	    type: 'doughnut',
	    data: {
	        labels: ["男", "女"],
	        datasets: [{
	            data: [32.7, 67.3],
	            backgroundColor: [
	                '#58AAB3',
	                '#CEE2E5'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxMarriage = $("#chart-marriage");
	var myChart = new Chart(ctxMarriage, {
	    type: 'doughnut',
	    data: {
	        labels: ["已婚", "未婚/單身"],
	        datasets: [{
	            data: [64.1, 35.9],
	            backgroundColor: [
	                '#FF9B53',
	                '#FFC121'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxAge = $("#chart-age");
	var myChart = new Chart(ctxAge, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"25歲以下",
	        	"25歲~34歲",
	        	"35歲~44歲",
	        	"45歲~54歲",
	        	"55歲~64歲",
	        	"65歲以上"
	        ],
	        datasets: [{
	            data: [2.6, 9.3, 21.1, 31.4, 24.5, 11.0],
	            backgroundColor: [
	                '#7F573A',
	                '#A56D45',
	                '#D2966A',
	                '#E6C7B0',
	                '#EFDCCD',
	                '#F8EFE7'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxChild = $("#chart-child");
	var myChart = new Chart(ctxChild, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"無",
	        	"有"
	        ],
	        datasets: [{
	            data: [40.8, 59.2],
	            backgroundColor: [
	                '#B5A092',
	                '#DFD7D1'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxIncome = $("#chart-income");
	var myChart = new Chart(ctxIncome, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"5萬以下",
	        	"5～8萬",
	        	"8～12萬",
	        	"12萬~15萬",
	        	"15萬以上"
	        ],
	        datasets: [{
	            data: [26.1, 28.7, 22.3, 9.1, 13.8],
	            backgroundColor: [
	                '#0071E3',
	                '#3B90E5',
	                '#70ACE7',
	                '#A0C4E9',
	                '#C4D7E8'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxQ1 = $("#chart-q1");
	var myChart = new Chart(ctxQ1, {
	    type: 'bar',
	    data: {
	        labels: [
	        	"非常重要",
	        	"重要",
	        	"普通",
	        	"不重要",
	        	"非常不重要"
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [30.7, 41.1, 21.8, 4.2, 2.2],
	            backgroundColor: [
	                '#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	                '#BBE7BD',
	                '#E2F5E3'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
			scales: {
				yAxes: [{
					ticks: {
						display: false
					}
				}]
			}
	    }
	});

	var ctxQ2 = $("#chart-q2");
	var myChart = new Chart(ctxQ2, {
	    type: 'radar',
	    data: {
	        labels: [
	        	"A",
	        	"B",
	        	"C",
	        	"D",
	        	"E",
	        	"F",
	        	"G",
	        	"H",
				"I"
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [68.7, 43.3, 35.4, 26.4, 22.1, 19.3, 13.7, 12.4, 0.8],
	            backgroundColor: 'rgba(119, 206, 123, 0.8)',
	            borderColor: '#77CE7B',
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ3 = $("#chart-q3");
	var myChart = new Chart(ctxQ3, {
	    type: 'bar',
	    data: {
	        labels: [
	        	"非常重要",
	        	"重要",
	        	"普通",
	        	"不重要",
	        	"非常不重要"
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [50.9, 37.5, 7.8, 2.0, 1.7],
	            backgroundColor: [
	                '#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	                '#BBE7BD',
	                '#E2F5E3'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ4 = $("#chart-q4");
	var myChart = new Chart(ctxQ4, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"有",
	        	"沒有"
	        ],
	        datasets: [{
	            data: [59.7, 40.3],
	            backgroundColor: [
	                '#3DB943',
	                '#9EDCA1',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ5 = $("#chart-q5");
	var myChart = new Chart(ctxQ5, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"太胖/有點胖",
	        	"我的體態很剛好",
	        	"太瘦/有點瘦",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [63.4, 27.5, 9.2],
	            backgroundColor: [
	                '#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ6 = $("#chart-q6");
	var myChart = new Chart(ctxQ6, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"正在積極執行",
	        	"有需求但還沒開始",
	        	"沒有需求",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [26.8, 44.2, 29.0],
	            backgroundColor: [
	                '#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ7 = $("#chart-q7");
	var myChart = new Chart(ctxQ7, {
	    type: 'radar',
	    data: {
	        labels: [
	        	"A",
	        	"B",
	        	"C",
	        	"D",
	        	"E",
	        	"F"
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [51.4, 59.3, 46.8, 49.7, 12.3, 3.5],
	            backgroundColor: 'rgba(119, 206, 123, 0.8)',
	            borderColor: '#77CE7B',
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxQ8 = $("#chart-q8");
	var myChart = new Chart(ctxQ8, {
	    type: 'radar',
	    data: {
	        labels: [
	        	"A",
	        	"B",
	        	"C",
	        	"D",
	        	"E",
	        	"F",
				"G",
				"H"
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [61.6, 25.2, 14.9, 53.7, 29.0, 11.6, 6.7, 4.4],
	            backgroundColor: 'rgba(119, 206, 123, 0.8)',
	            borderColor: '#77CE7B',
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxQ9 = $("#chart-q9");
	var myChart = new Chart(ctxQ9, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"均衡飲食，不挨餓",
	        	"提升代謝，減少脂肪囤積",
	        	"維持肌肉量，避免虛弱",
				"搭配保健品，輔助減重",
				"短期快速見效",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [29.0, 39.7, 23.4, 5.0, 2.9],
	            backgroundColor: [
					'#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	                '#BBE7BD',
	                '#E2F5E3',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxQ10 = $("#chart-q10");
	var myChart = new Chart(ctxQ10, {
	    type: 'doughnut',
	    data: {
	        labels: [
	        	"有，持續使用中",
	        	"有，但已停用",
	        	"沒有",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [17.5, 19.6, 62.8],
	            backgroundColor: [
					'#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});

	var ctxQ11 = $("#chart-q11");
	var myChart = new Chart(ctxQ11, {
	    type: 'radar',
	    data: {
	        labels: [
	        	"A",
	        	"B",
	        	"C",
	        	"D",
	        	"E",
	        	"F",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [26.3, 20.7, 19.4, 35.7, 52.0, 25.2],
	            backgroundColor: 'rgba(119, 206, 123, 0.8)',
	            borderColor: '#77CE7B',
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ12 = $("#chart-q12");
	var myChart = new Chart(ctxQ12, {
	    type: 'bar',
	    data: {
	        labels: [
	        	"0~999元",
				"1,000~2,999元",
				"3,000~5,999元",
				"6,000~9,999元",
				"10,000元以上",
				"其他"
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [42.2, 39.0, 11.1, 2.7, 2.0, 2.9],
	            backgroundColor: [
	                '#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	                '#BBE7BD',
	                '#E2F5E3',
					'#EDFDEE'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ13 = $("#chart-q13");
	var myChart = new Chart(ctxQ13, {
	    type: 'radar',
	    data: {
	        labels: [
	        	"A",
	        	"B",
	        	"C",
	        	"D",
	        	"E",
	        	"F",
	        	"G",
				"H",
	        	"I",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [48.2, 45.4, 29.9, 26.5, 51.9, 37.5, 30.5, 2.2],
	            backgroundColor: 'rgba(119, 206, 123, 0.8)',
	            borderColor: '#77CE7B',
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ14 = $("#chart-q14");
	var myChart = new Chart(ctxQ14, {
	    type: 'radar',
	    data: {
	        labels: [
	        	"A",
	        	"B",
	        	"C",
	        	"D",
	        	"E",
	        	"F",
	        	"G",
				"H",
	        	"I",
	        	"J",
	        	"K",
	        	"L",
	        	"M",
	        	"N",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [39.3, 37.0, 26.3, 11.4, 13.7, 17.3, 16.7, 30.7, 38.8, 46.4, 42.1, 27.3, 5.4],
	            backgroundColor: 'rgba(119, 206, 123, 0.8)',
	            borderColor: '#77CE7B',
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ15 = $("#chart-q15");
	var myChart = new Chart(ctxQ15, {
		type: 'bar',
	    data: {
	        labels: [
	        	"0~999元",
				"1,000~2,999元",
				"3,000~5,999元",
				"6,000~9,999元",
				"10,000元以上",
				"其他"
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [31.3, 45.4, 16.3, 3.6, 2.3, 1.2],
	            backgroundColor: [
	                '#3DB943',
	                '#77CE7B',
	                '#9EDCA1',
	                '#BBE7BD',
	                '#E2F5E3',
					'#EDFDEE'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});


	var ctxQ16 = $("#chart-q16");
	var myChart = new Chart(ctxQ16, {
	    type: 'radar',
	    data: {
	        labels: [
	        	"A",
	        	"B",
	        	"C",
	        	"D",
	        	"E",
	        	"F",
	        	"G",
	        ],
	        datasets: [{
	        	label: '分布比率',
	            data: [52.6, 23.1, 3.9, 49.0, 26.0, 10.8, 5.6],
	            backgroundColor: 'rgba(119, 206, 123, 0.8)',
	            borderColor: '#77CE7B',
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	    }
	});