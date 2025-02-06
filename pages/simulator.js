// Políticas disponibles
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

let metricsChart = null;

function generatePolicyCards() {
    const container = document.getElementById('policies-container');
    if (!container) return;
    
    container.innerHTML = '';
    
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

function calculateImpact() {
    const selectedPolicies = policies.filter(policy => 
        document.getElementById(policy.id)?.checked
    );
    
    if (selectedPolicies.length === 0) {
        alert('Por favor, selecciona al menos una política');
        return;
    }

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

    if (typeof db !== 'undefined') {
        db.collection('simulations').add({
            timestamp: new Date(),
            selectedPolicies: selectedPolicies.map(p => p.id),
            impact: impact
        }).catch(error => console.error('Error saving to Firebase:', error));
    }

    updateResults(impact);
    updateChart(impact);
}

function updateResults(impact) {
    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) return;

    resultsDiv.classList.remove('d-none');
    
    const engagementValue = document.getElementById('engagement-value');
    if (engagementValue) {
        engagementValue.textContent = `${impact.engagement}%`;
    }
}

function updateChart(impact) {
    const canvas = document.getElementById('metricsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
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

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    generatePolicyCards();
});
