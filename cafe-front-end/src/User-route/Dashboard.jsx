import { useEffect, useState } from "react";
import BasePage from "../Pages/BasePage";
import SideBar from "../components/SideBar";
import { getDashboardDetails } from "../Services/dashboard-service";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDashboardDetails();
        setDashboardData(response);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BasePage>
        <div className="container mt30">
          <div className="row">
            <div className="col-md-3 mt-20">
              <SideBar />
            </div>
            <div className="col-md-9 mt-30">
              <div className="card">
                <div className="card-header text-center">
                  <strong>Dashboard</strong>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Card 1</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Content for Card 1 goes here.</p>
                    </div>
                  </div>

                  <div className="card mt-3">
                    <div className="card-header">
                      <h5 className="card-title">Card 2</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Content for Card 2 goes here.</p>
                    </div>
                  </div>

                  <a href="#" className="btn btn-primary mt-3">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Dashboard;
