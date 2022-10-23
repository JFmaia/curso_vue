new Vue({
	el: '#desafio',
	data: {
		expressao: false,
		nomes: ['Ana', 'Rafa', 'Lucas', 'Gui'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		pessoas: [
			{
				id: 1,
				nome: 'José',
				notas: [7.67, 8.33, 6.98, 9.21]
			},

			{
				id: 2,
				nome: 'Flávio',
				notas: [7.67, 8.33, 6.98, 9.21]
			},

			{
				id: 3,
				nome: 'Mairo',
				notas: [7.67, 8.33, 6.98, 9.21]
			}
		]
	}
});
