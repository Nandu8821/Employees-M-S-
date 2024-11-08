

const employees = [
    {
      id: 1,
      firstname: "Raj",
      email: "raj@me.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Complete Report",
          taskDescription: "Finish and submit the quarterly report.",
          taskDate: "2024-11-05",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "Reporting"
        },
        {
          taskTitle: "Team Sync",
          taskDescription: "Attend the daily stand-up meeting.",
          taskDate: "2024-11-06",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          category: "Meeting"
        },
        {
          taskTitle: "Client Feedback",
          taskDescription: "Incorporate client feedback into the design.",
          taskDate: "2024-11-07",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "Design"
        }
      ],
      taskNumbers: {
        active: 2,
        newTask: 2,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 2,
      firstname: "Amit",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Bug Fixing",
          taskDescription: "Fix critical bugs in the main codebase.",
          taskDate: "2024-11-05",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          category: "Development"
        },
        {
          taskTitle: "Documentation Update",
          taskDescription: "Update the project documentation with new APIs.",
          taskDate: "2024-11-08",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          category: "Documentation"
        },
        {
          taskTitle: "Code Review",
          taskDescription: "Review and approve code from other team members.",
          taskDate: "2024-11-09",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "Review"
        }
      ],
      taskNumbers: {
        active: 4,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 3,
      firstname: "Priya",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Prepare Demo",
          taskDescription: "Prepare a demo for the new feature implementation.",
          taskDate: "2024-11-07",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "Demo"
        },
        {
          taskTitle: "Client Meeting",
          taskDescription: "Discuss project updates with the client.",
          taskDate: "2024-11-06",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          category: "Meeting"
        },
        {
          taskTitle: "Research Trends",
          taskDescription: "Research the latest industry trends.",
          taskDate: "2024-11-10",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "Research"
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 0,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 4,
      firstname: "Neha",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Marketing Plan Review",
          taskDescription: "Review the marketing plan for the next quarter.",
          taskDate: "2024-11-05",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          category: "Marketing"
        },
        {
          taskTitle: "Website Update",
          taskDescription: "Update the company website with new content.",
          taskDate: "2024-11-06",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          category: "Web Development"
        },
        {
          taskTitle: "SEO Audit",
          taskDescription: "Conduct an SEO audit to improve website visibility.",
          taskDate: "2024-11-07",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "SEO"
        }
      ],
      taskNumbers: {
        active: 3,
        newTask: 1,
        completed: 1,
        failed: 1
      }
    },
    {
      id: 5,
      firstname: "Arjun",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Internal Training",
          taskDescription: "Prepare material for internal training sessions.",
          taskDate: "2024-11-05",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "Training"
        },
        {
          taskTitle: "Performance Review",
          taskDescription: "Complete performance reviews for the team.",
          taskDate: "2024-11-06",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          category: "HR"
        },
        {
          taskTitle: "Strategy Session",
          taskDescription: "Plan the strategy for the upcoming project phase.",
          taskDate: "2024-11-08",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          category: "Strategy"
        }
      ],
      taskNumbers: {
        active: 5,
        newTask: 2,
        completed: 1,
        failed: 0
      }
    }
  ];
  
  const admin = [
    {
      id: 1,
      firstname: "Anjali",
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  
  

  

  export const setLocalStorage = () => {
     localStorage.setItem("employees" , JSON.stringify(employees))
     localStorage.setItem("Admin" , JSON.stringify(admin))
  }

  
  export const getLocalStorage = () => {
     const employees = JSON.parse(localStorage.getItem("employees"))
     const Admin = JSON.parse(localStorage.getItem("Admin"))
     return{employees,Admin}
  
    
  }
  