import '../css/overview.css';
import Sidebar from '../components/sidebar';
import ApexChart from '../components/Spline';
import Reports from '../components/donut'
import Expenses from '../components/Bar';
import Sales from '../components/sales';

function Overview() {
    return (
        <>
            <Sidebar/>
            <div className="overview-container">
                <h2>Overview</h2>
                <p>Hello Admin!</p>
                <hr />
                <div className="status-cards">
                 <div className="card in-review">
                        <h3>In Review</h3>
                        <p>06</p>
                        <span>Month of April</span>
                    </div>
                    <div className="card ongoing">
                        <h3>Ongoing</h3>
                        <p>01</p>
                        <span>Month of April</span>
                    </div>
                    <div className="card pending">
                        <h3>Pending</h3>
                        <p>01</p>
                        <span>Month of April</span>
                    </div>
                    <div className="card out-for-delivery">
                        <h3>Out for Delivery</h3>
                        <p>01</p>
                        <span>Month of April</span>
                    </div>
                    <div className="card completed">
                        <h3>Completed</h3>
                        <p>07</p>
                        <span>Month of April</span>
                    </div> */
                </div>

                <div className="charts-section">
                    <div className="chart-card">
                        <h3>Total Orders</h3>
                        <ApexChart />
                    </div>

                    <div className="chart-card">
                        <h3>Total Sales</h3>
                        <Sales />
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="report-card">
                        <h3>Reports</h3>
                        <Reports/>
                    </div>  

                    <div className="expense-card">
                        <h3>Expenses</h3>
                        <Expenses />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;
