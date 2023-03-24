const ctx = document.getElementById('grafico_1');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# Votos',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: "#FFF"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('grafico_2');

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['2019', '2020', '2021', '2022'],
    datasets: [{
      label: '# Melhor ano',
      data: [20, 1, 5, 50],
      borderWidth: 1,
      backgroundColor: "#000"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx3 = document.getElementById('grafico_3');

new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Maça', 'Banana', 'Morango', 'Manga'],
    datasets: [{
      label: '# Melhor fruta',
      data: [60, 70, 80, 50],
      backgroundColor: "#FFF"
    }]
  },
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
  }
});

const ctx4 = document.getElementById('grafico_4');

new Chart(ctx4, {
  type: 'pie',
  data: {
    labels: ['Maça', 'Banana', 'Morango', 'Manga'],
    datasets: [{
      label: '# Melhor fruta',
      data: [60, 70, 80, 50],
      backgroundColor: "#FFF"
    }]
  },
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
  }
});
