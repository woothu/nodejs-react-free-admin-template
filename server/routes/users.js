const { Router } = require('express')

const usersData = [{
    user: {
      name: 'Yiorgos Avraamu',
      new: true,
      registered: 'Jan 1, 2021',
    },
    usage: {
      value: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    activity: '10 sec ago',
  },
  {
    user: {
      name: 'Avram Tarasios',
      new: false,
      registered: 'Jan 1, 2021',
    },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'info',
    },
    activity: '5 minutes ago',
  },
  {
    user: {
      name: 'Quintin Ed',
      new: true,
      registered: 'Jan 1, 2021'
    },
    usage: {
      value: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'warning',
    },
    activity: '1 hour ago',
  },
  {
    user: {
      name: 'Enéas Kwadwo',
      new: true,
      registered: 'Jan 1, 2021'
    },
    usage: {
      value: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'danger',
    },
    activity: 'Last month',
  },
  {
    user: {
      name: 'Agapetus Tadeáš',
      new: true,
      registered: 'Jan 1, 2021',
    },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'primary',
    },
    activity: 'Last week',
  },
  {
    user: {
      name: 'Friderik Dávid',
      new: true,
      registered: 'Jan 1, 2021',
    },
    usage: {
      value: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    activity: 'Last week',
  },
]

module.exports = () => {
  const router = Router();

  router.get('/', async (req, res) => {
    try {
      res.json(usersData)
    } catch (e) {
      console.error(e)
    }
  });

  return router
}