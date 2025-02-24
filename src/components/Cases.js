export default function Cases() {
    const cases = [
      { title: 'Case 1', description: 'Descrição do case 1.' },
      { title: 'Case 2', description: 'Descrição do case 2.' },
      { title: 'Case 3', description: 'Descrição do case 3.' },
    ];
  
    return (
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Cases de Sucesso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">{caseItem.title}</h3>
                <p className="text-gray-300">{caseItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }