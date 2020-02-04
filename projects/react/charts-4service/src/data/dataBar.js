const dataBar = {
  labels: ['Всего', 'Закрыто', 'В работе', 'Новый', 'Просрочен'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: [
        'rgba(255, 135, 161, 0.3)',
        'rgba(95, 181, 239, 0.3)',
        'rgba(255, 216, 119, 0.3)',
        'rgba(100, 201, 201, 0.3)',
        'rgba(168, 129, 245, 0.3)',
      ],
      borderColor: [
        '#ff87a1',
        '#5fb5ef',
        '#ffd877',
        '#64c9c9',
        '#a881f5',
      ],
      borderWidth: 1,
      data: [950, 820, 30, 40, 200, 2000]
    }
  ]
};

export default dataBar;
