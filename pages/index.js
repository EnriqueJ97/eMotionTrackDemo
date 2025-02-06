// Definir políticas disponibles
const policies = [
    {
        id: 'flexwork',
        name: 'Trabajo Flexible',
        description: 'Implementar horarios flexibles y trabajo remoto',
        impact: {
            engagement: 15,
            burnout: -20,
            productivity: 10
        },
        cost: 1000
    },
    {
        id: 'wellness',
        name: 'Programa de Bienestar',
        description: 'Sesiones de mindfulness y apoyo psicológico',
        impact: {
            engagement: 20,
            burnout: -30,
            productivity: 15
        },
        cost: 2000
    },
    {
        id: 'breaks',
        name: 'Pausas Activas',
        description: 'Implementar pausas estructuradas durante la jornada',
        impact: {
            engagement: 10,
            burnout: -15,
            productivity: 5
        },
        cost: 500
    }
];

// Inicializar Firebase y variables globales
let metricsChart = null;

// Función para generar las tarjetas de políticas
function generatePolicyCards() {
    const container = document.getElementById('policies-container');
    
    policies.forEach(policy => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${policy.name}</h5>
                    <p class="card-text">${policy.description}</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="${policy.id}" id="${policy.id}">
                        <label class="form-check-label" for="${policy.id}">
                            Implementar (Coste: ${policy.cost}€)
                        </label>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para calcular el impacto
async function calculateImpact() {
    const selectedPolicies = policies.filter(policy => 
        document.getElementById(policy.id).checked
    );
    
    if (selectedPolicies.length === 0) {
        alert('Por favor, selecciona al menos una política');
        return;
    }

    // Calcular impacto total
    const impact = {
        engagement: 0,
        burnout: 0,
        productivity: 0,
        totalCost: 0
    };

    selectedPolicies.forEach(policy => {
        impact.engagement += policy.impact.engagement;
        impact.burnout += policy.impact.burnout;
        impact.productivity += policy.impact.productivity;
        impact.totalCost += policy.cost;
    });

    // Guardar simulación en Firebase
    try {
        await db.collection('simulations').add({
            timestamp: new Date(),
            selectedPolicies: selectedPolicies.map(p => p.id),
            impact: impact
        });

        // Actualizar UI
        updateResults(impact);
        updateChart(impact);
        loadSimulationHistory();
    } catch (error) {
        console.error('Error saving simulation:', error);
        alert('Error al guardar la simulación');
    }
}

// Función para actualizar resultados
function updateResults(impact) {
    document.getElementById('results').classList.remove('d-none');
    document.getElementById('engagement-value').textContent = `${impact.engagement}%`;
    // Actualizar otras métricas aquí
}

// Función para actualizar el gráfico
function updateChart(impact) {
    const ctx = document.getElementById('metricsChart').getContext('2d');
    
    if (metricsChart) {
        metricsChart.destroy();
    }

    metricsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Engagement', 'Reducción Burnout', 'Productividad'],
            datasets: [{
                label: 'Impacto (%)',
                data: [impact.engagement, -impact.burnout, impact.productivity],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
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
}

// Función para cargar el historial de simulaciones
async function loadSimulationHistory() {
    try {
        const snapshot = await db.collection('simulations')
            .orderBy('timestamp', 'desc')
            .limit(5)
            .get();

        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';

        snapshot.forEach(doc => {
            const data = doc.data();
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `
                <strong>${data.timestamp.toDate().toLocaleDateString()}</strong>: 
                Impacto en Engagement: +${data.impact.engagement}%, 
                Reducción Burnout: ${data.impact.burnout}%, 
                Coste: ${data.impact.totalCost}€
            `;
            historyList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading history:', error);
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    generatePolicyCards();
    loadSimulationHistory();
});
