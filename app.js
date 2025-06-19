// Main JavaScript for AI Voice Agent System Application

// System Components Data
const systemComponents = [
  {
    component: "Voice Intake Agent",
    technology: "Retell + ElevenLabs",
    function: "Conversational data gathering",
    key_features: ["Friendly tone", "Empathetic responses", "Data validation", "Call recording"],
    estimated_cost_monthly: "$200-500",
    roi_potential: "40-60% time savings",
    icon: "fas fa-phone-alt"
  },
  {
    component: "Claim Value Analyzer",
    technology: "OpenAI GPT + Custom Logic",
    function: "Lead scoring and prioritization",
    key_features: ["Severity assessment", "Value scoring", "Urgency detection", "Risk analysis"],
    estimated_cost_monthly: "$50-150",
    roi_potential: "30% better case selection",
    icon: "fas fa-brain"
  },
  {
    component: "Scheduling Agent",
    technology: "Google Calendar/Outlook API",
    function: "Appointment booking",
    key_features: ["Calendar integration", "Availability checking", "Confirmation system", "Reminder automation"],
    estimated_cost_monthly: "$25-75",
    roi_potential: "50% faster scheduling",
    icon: "fas fa-calendar-alt"
  },
  {
    component: "Email Summary Agent",
    technology: "Make.com + Email APIs",
    function: "Case documentation and communication",
    key_features: ["Structured summaries", "Professional formatting", "Auto-distribution", "Follow-up tracking"],
    estimated_cost_monthly: "$30-100",
    roi_potential: "75% admin time reduction",
    icon: "fas fa-envelope"
  }
];

// ROI Metrics Data
const roiMetrics = [
  {metric: "Time Savings", traditional_hours: 2.5, automated_hours: 0.5, savings_percent: 80},
  {metric: "Cost per Lead", traditional_cost: 150, automated_cost: 45, savings_percent: 70},
  {metric: "Conversion Rate", traditional_percent: 15, automated_percent: 25, improvement_percent: 67},
  {metric: "Response Time", traditional_hours: 24, automated_hours: 0.25, improvement_percent: 99},
  {metric: "Data Accuracy", traditional_percent: 75, automated_percent: 95, improvement_percent: 27}
];

// Implementation Phases Data
const implementationPhases = [
  {phase: "Phase 1: Setup", duration_weeks: 2, activities: ["Platform setup", "Voice training", "Basic workflows"], cost: 5000},
  {phase: "Phase 2: Integration", duration_weeks: 3, activities: ["Calendar sync", "CRM connection", "Testing"], cost: 7500},
  {phase: "Phase 3: Deployment", duration_weeks: 2, activities: ["Live testing", "Staff training", "Fine-tuning"], cost: 3000},
  {phase: "Phase 4: Optimization", duration_weeks: 4, activities: ["Performance monitoring", "Script refinement", "Analytics setup"], cost: 4000}
];

// Sample Conversation Data
const sampleConversation = [
  {speaker: "AI Agent", message: "Hello, this is Sarah from Smith & Associates Law Firm. I understand you may have been injured in an accident. I'm here to help gather some initial information. Is now a good time to talk?"},
  {speaker: "Client", message: "Yes, I was in a car accident last week and I'm not sure what to do."},
  {speaker: "AI Agent", message: "I'm sorry to hear about your accident. Let me help you through this. First, let me get your contact information so we can follow up properly. Can you tell me your full name?"},
  {speaker: "Client", message: "John Smith, my phone is 555-123-4567"},
  {speaker: "AI Agent", message: "Thank you John. Now, can you tell me what happened in the accident? Take your time."},
  {speaker: "Client", message: "I was stopped at a red light and someone rear-ended me. My neck and back are really hurting."},
  {speaker: "AI Agent", message: "That sounds very concerning. Did you receive medical attention after the accident?"},
  {speaker: "Client", message: "I went to the emergency room that day. They said I have whiplash."},
  {speaker: "AI Agent", message: "I'm glad you sought medical attention. Based on what you've told me, I'd like to schedule you for a consultation with one of our attorneys as soon as possible. Are you available tomorrow at 2 PM?"}
];

// Pricing Tiers Data
const pricingTiers = [
  {
    tier: "Starter",
    price: "$500/month",
    features: ["Basic voice intake", "Standard reporting", "Email integration"],
    best_for: "Solo practitioners"
  },
  {
    tier: "Professional",
    price: "$1200/month",
    features: ["Advanced AI analysis", "Calendar integration", "Custom workflows", "Priority support"],
    best_for: "Small firms (2-5 attorneys)",
    featured: true
  },
  {
    tier: "Enterprise",
    price: "$2500/month",
    features: ["Full automation suite", "Multi-location support", "Advanced analytics", "Dedicated account manager"],
    best_for: "Large firms (5+ attorneys)"
  }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initializeSystemComponents();
  initializeConversation();
  initializeTimeline();
  initializePricingPlans();
  initializeRoiCalculator();
  initializeButtons();
});

// Initialize System Components
function initializeSystemComponents() {
  const componentContainer = document.querySelector('.component-cards');
  
  if (!componentContainer) return;
  
  systemComponents.forEach(component => {
    const componentHTML = `
      <div class="component-card">
        <div class="component-icon">
          <i class="${component.icon}"></i>
        </div>
        <h3>${component.component}</h3>
        <p>${component.function}</p>
        <div class="features">
          <ul class="plan-features">
            ${component.key_features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div class="tech-stack">
          <small>${component.technology}</small>
        </div>
        <div class="cost-roi">
          <span>Est. Cost: ${component.estimated_cost_monthly}</span>
          <span>ROI: ${component.roi_potential}</span>
        </div>
      </div>
    `;
    
    componentContainer.innerHTML += componentHTML;
  });
}

// Initialize Sample Conversation
function initializeConversation() {
  const conversationContainer = document.querySelector('.conversation');
  
  if (!conversationContainer) return;
  
  sampleConversation.forEach(message => {
    const messageType = message.speaker === 'AI Agent' ? 'ai' : 'client';
    const messageHTML = `
      <div class="message ${messageType}">
        <div class="message-content">
          <div class="speaker-label">${message.speaker}</div>
          ${message.message}
        </div>
      </div>
    `;
    
    conversationContainer.innerHTML += messageHTML;
  });
}

// Initialize Timeline
function initializeTimeline() {
  const timelineContainer = document.querySelector('.timeline-phases');
  
  if (!timelineContainer) return;
  
  implementationPhases.forEach((phase, index) => {
    const phaseHTML = `
      <div class="timeline-phase">
        <div class="phase-number">${index + 1}</div>
        <div class="phase-content">
          <h4>${phase.phase}</h4>
          <div class="phase-duration">Duration: ${phase.duration_weeks} weeks</div>
          <div class="phase-activities">Activities: ${phase.activities.join(', ')}</div>
          <div class="phase-cost">Investment: $${phase.cost.toLocaleString()}</div>
        </div>
      </div>
    `;
    
    timelineContainer.innerHTML += phaseHTML;
  });
  
  // Calculate total investment and time
  const totalInvestment = implementationPhases.reduce((sum, phase) => sum + phase.cost, 0);
  const totalTime = implementationPhases.reduce((sum, phase) => sum + phase.duration_weeks, 0);
  
  document.getElementById('total-investment').textContent = `$${totalInvestment.toLocaleString()}`;
  document.getElementById('implementation-time').textContent = `${totalTime} weeks`;
}

// Initialize Pricing Plans
function initializePricingPlans() {
  const pricingContainer = document.querySelector('.pricing-plans');
  
  if (!pricingContainer) return;
  
  pricingTiers.forEach(plan => {
    const planHTML = `
      <div class="pricing-plan ${plan.featured ? 'featured' : ''}">
        <div class="plan-tier">${plan.tier}</div>
        <div class="plan-price">${plan.price}</div>
        <ul class="plan-features">
          ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="plan-best-for">Best for: ${plan.best_for}</div>
        <button class="btn ${plan.featured ? 'btn--primary' : 'btn--outline'} btn--full-width">Select Plan</button>
      </div>
    `;
    
    pricingContainer.innerHTML += planHTML;
  });
}

// Initialize ROI Calculator
function initializeRoiCalculator() {
  const calculateRoiButton = document.getElementById('calculate-roi');
  
  if (!calculateRoiButton) return;
  
  calculateRoiButton.addEventListener('click', function() {
    // Get input values
    const monthlyLeads = parseFloat(document.getElementById('monthly-leads').value) || 50;
    const timePerIntake = parseFloat(document.getElementById('time-per-intake').value) || 150; // in minutes
    const hourlyRate = parseFloat(document.getElementById('hourly-rate').value) || 25;
    const currentConversion = parseFloat(document.getElementById('conversion-rate').value) || 15;
    
    // Calculate metrics
    const traditionalTimeMinutes = monthlyLeads * timePerIntake;
    const automatedTimeMinutes = traditionalTimeMinutes * 0.2; // 80% reduction
    const timeSavedHours = (traditionalTimeMinutes - automatedTimeMinutes) / 60;
    
    const traditionalCost = (traditionalTimeMinutes / 60) * hourlyRate;
    const automatedCost = traditionalCost * 0.3; // 70% reduction
    const costSaved = traditionalCost - automatedCost;
    
    const traditionalClients = monthlyLeads * (currentConversion / 100);
    const automatedClients = monthlyLeads * ((currentConversion * 1.67) / 100); // 67% improvement
    const additionalClients = automatedClients - traditionalClients;
    
    const monthlyInvestment = 1200; // Professional tier
    const roiMultiple = costSaved / monthlyInvestment;
    
    // Update results
    document.getElementById('time-saved').textContent = `${Math.round(timeSavedHours)} hours`;
    document.getElementById('cost-saved').textContent = `$${Math.round(costSaved).toLocaleString()}`;
    document.getElementById('additional-clients').textContent = `${Math.round(additionalClients)} per month`;
    document.getElementById('roi-multiple').textContent = `${roiMultiple.toFixed(1)}x`;
    
    // Create ROI Chart
    createRoiChart(traditionalTimeMinutes/60, automatedTimeMinutes/60, traditionalCost, automatedCost, traditionalClients, automatedClients);
  });
  
  // Payback period calculator
  const calculatePaybackButton = document.getElementById('calculate-payback');
  
  if (calculatePaybackButton) {
    calculatePaybackButton.addEventListener('click', function() {
      const monthlyRevenue = parseFloat(document.getElementById('monthly-revenue').value) || 5000;
      const totalInvestment = 19500; // From implementation phases
      
      // Simple payback calculation - assumes average case value
      const additionalClientsPerMonth = 8; // Based on average calculation
      const additionalRevenue = additionalClientsPerMonth * monthlyRevenue;
      const paybackMonths = totalInvestment / additionalRevenue;
      
      let paybackText;
      if (paybackMonths <= 3) {
        paybackText = "2-3 months";
      } else if (paybackMonths <= 6) {
        paybackText = "4-6 months";
      } else if (paybackMonths <= 9) {
        paybackText = "7-9 months";
      } else {
        paybackText = "10-12 months";
      }
      
      document.getElementById('custom-payback').textContent = paybackText;
    });
  }
  
  // Trigger initial calculation
  calculateRoiButton.click();
}

// Create ROI Chart
function createRoiChart(traditionalTime, automatedTime, traditionalCost, automatedCost, traditionalClients, automatedClients) {
  const ctx = document.getElementById('roi-chart');
  
  if (!ctx) return;
  
  // Destroy existing chart if it exists
  if (window.roiChart) {
    window.roiChart.destroy();
  }
  
  window.roiChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Time Spent (hours)', 'Monthly Cost ($)', 'Clients Converted'],
      datasets: [
        {
          label: 'Traditional Process',
          data: [traditionalTime, traditionalCost, traditionalClients],
          backgroundColor: '#DB4545',
          borderColor: '#B4413C',
          borderWidth: 1
        },
        {
          label: 'AI Voice Agent',
          data: [automatedTime, automatedCost, automatedClients],
          backgroundColor: '#1FB8CD',
          borderColor: '#1a5966',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              // Format value based on dataset
              if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
                const datasetIndex = this.chart.tooltip._active[0].datasetIndex;
                const dataIndex = this.chart.tooltip._active[0].index;
                
                if (dataIndex === 0) {
                  return value + ' hours';
                } else if (dataIndex === 1) {
                  return '$' + value;
                } else {
                  return value;
                }
              }
              return value;
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              
              if (context.parsed.y !== null) {
                if (context.dataIndex === 0) {
                  label += context.parsed.y.toFixed(1) + ' hours';
                } else if (context.dataIndex === 1) {
                  label += '$' + context.parsed.y.toFixed(0);
                } else {
                  label += context.parsed.y.toFixed(1) + ' clients';
                }
              }
              return label;
            }
          }
        }
      }
    }
  });
}

// Initialize Buttons and Form Actions
function initializeButtons() {
  // Contact form submission
  const submitContactButton = document.getElementById('submit-contact');
  
  if (submitContactButton) {
    submitContactButton.addEventListener('click', function() {
      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const phoneField = document.getElementById('phone');
      
      // Simple validation
      let isValid = true;
      
      if (!nameField.value.trim()) {
        nameField.classList.add('error');
        isValid = false;
      } else {
        nameField.classList.remove('error');
      }
      
      if (!emailField.value.trim() || !emailField.value.includes('@')) {
        emailField.classList.add('error');
        isValid = false;
      } else {
        emailField.classList.remove('error');
      }
      
      if (!phoneField.value.trim()) {
        phoneField.classList.add('error');
        isValid = false;
      } else {
        phoneField.classList.remove('error');
      }
      
      if (isValid) {
        // Simulate form submission
        submitContactButton.textContent = 'Submitting...';
        submitContactButton.classList.add('loading');
        
        setTimeout(() => {
          const form = document.getElementById('contact-form');
          form.innerHTML = `
            <div class="success-message" style="text-align: center;">
              <i class="fas fa-check-circle" style="color: var(--color-success); font-size: 3rem; margin-bottom: var(--space-16);"></i>
              <h4>Thank You!</h4>
              <p>Your demo request has been submitted. One of our representatives will contact you within 24 hours.</p>
            </div>
          `;
        }, 1500);
      }
    });
  }
  
  // Select Plan buttons
  const planButtons = document.querySelectorAll('.pricing-plan .btn');
  
  planButtons.forEach(button => {
    button.addEventListener('click', function() {
      scrollToSection('pricing');
      
      // Pre-select the firm size based on the plan
      const planElement = this.closest('.pricing-plan');
      const planTier = planElement.querySelector('.plan-tier').textContent;
      
      const firmSizeSelect = document.getElementById('firm-size');
      
      if (firmSizeSelect) {
        if (planTier.includes('Starter')) {
          firmSizeSelect.value = 'solo';
        } else if (planTier.includes('Professional')) {
          firmSizeSelect.value = 'small';
        } else if (planTier.includes('Enterprise')) {
          firmSizeSelect.value = 'medium';
        }
      }
      
      // Focus on the first field
      document.getElementById('name').focus();
    });
  });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  
  if (section) {
    const offsetTop = section.offsetTop - 80; // Account for header height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}