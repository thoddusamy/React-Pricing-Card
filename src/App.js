import logo from './logo.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'

function App() {
  let priceTable = [
    {
      title: 'free',
      price: 0,
      desc: [
        {
          content: 'Single User',
          active: true,
        },
        {
          content: '5GB Storage',
          active: true,
        },
        {
          content: 'Unlimited Public Projects',
          active: true,
        },
        {
          content: 'Community Access',
          active: true,
        },
        {
          content: 'Unlimited Private Projects',
          active: false,
        },
        {
          content: 'Dedicated Phone Support',
          active: false,
        },
        {
          content: 'Free Subdomain',
          active: false,
        },
        {
          content: 'Monthly Status Reports',
          active: false,
        },
      ],
    },
    {
      title: 'plus',
      price: 9,
      desc: [
        {
          content: '5 Users',
          active: true,
        },
        {
          content: '50GB Storage',
          active: true,
        },
        {
          content: 'Unlimited Public Projects',
          active: true,
        },
        {
          content: 'Community Access',
          active: true,
        },
        {
          content: 'Unlimited Private Projects',
          active: true,
        },
        {
          content: 'Dedicated Phone Support',
          active: true,
        },
        {
          content: 'Free Subdomain',
          active: true,
        },
        {
          content: 'Monthly Status Reports',
          active: false,
        },
      ],
    },
    {
      title: 'pro',
      price: 49,
      desc: [
        {
          content: 'Unlimited Users',
          active: true,
        },
        {
          content: '150GB Storage',
          active: true,
        },
        {
          content: 'Unlimited Public Projects',
          active: true,
        },
        {
          content: 'Community Access',
          active: true,
        },
        {
          content: 'Unlimited Private Projects',
          active: true,
        },
        {
          content: 'Dedicated Phone Support',
          active: true,
        },
        {
          content: 'Unlimited Free Subdomains',
          active: true,
        },
        {
          content: 'Monthly Status Reports',
          active: true,
        },
      ],
    },
  ]
  return (
    <section className='pricing py-5'>
      <div className='container'>
        <div className='row'>
          {priceTable.map((item) => {
            return <Card data={item}></Card>
          })}
        </div>
      </div>
    </section>
  )
}

export default App
