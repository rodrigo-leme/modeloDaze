import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const products = [
    { id: 1, name: "Camisa Casual", price: 129.99, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0fGVufDB8fDB8fHww" },
    { id: 2, name: "Jaqueta de Couro", price: 299.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "Calça Jeans", price: 159.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D" },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-gray-800">DAZE Modas</Link>
          <div className="flex space-x-6">
            <Link href="/produtos" className="text-gray-600 hover:text-gray-800 transition duration-300">Produtos</Link>
            <Link href="/sobre" className="text-gray-600 hover:text-gray-800 transition duration-300">Sobre</Link>
            <Link href="/contato" className="text-gray-600 hover:text-gray-800 transition duration-300">Contato</Link>
            <Link href="/carrinho" className="text-gray-600 hover:text-gray-800 transition duration-300">Carrinho</Link>
          </div>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">DAZE Modas</h1>
          <p className="text-xl mb-8">Estilo atemporal para o homem moderno</p>
          <Link href="/produtos" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Explorar Coleção
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">Destaques da Coleção</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">Estilo e conforto em uma peça única</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl">R$ {product.price.toFixed(2)}</span>
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Por que escolher a DAZE Modas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="font-semibold text-xl mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">Tecidos selecionados e acabamento impecável para durar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🕰️</div>
              <h3 className="font-semibold text-xl mb-2">Estilo Atemporal</h3>
              <p className="text-gray-600">Peças que transcendem tendências e nunca saem de moda.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-semibold text-xl mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">Compromisso com práticas eco-friendly e moda consciente.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">DAZE Modas</h3>
              <p className="text-gray-400">Moda masculina de qualidade para todos os estilos.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="/produtos" className="text-gray-400 hover:text-white transition duration-300">Produtos</Link></li>
                <li><Link href="/sobre" className="text-gray-400 hover:text-white transition duration-300">Sobre Nós</Link></li>
                <li><Link href="/contato" className="text-gray-400 hover:text-white transition duration-300">Contato</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-gray-400">Email: contato@dazemodas.com</p>
              <p className="text-gray-400">Telefone: (11) 1234-5678</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="flex">
                <input type="email" placeholder="Seu e-mail" className="px-4 py-2 w-full rounded-l-md focus:outline-none" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
                  Assinar
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} DAZE Modas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}