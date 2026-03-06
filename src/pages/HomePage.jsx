import Banner from '../components/Banner';
import HotJobs from '../components/HotJobs';

const HomePage = () => {
  return (
    <div>
      <section className="mb-6 lg:mb-12">
        <Banner></Banner>
      </section>
      <section>
        <HotJobs></HotJobs>
      </section>
    </div>
  );
};

export default HomePage;
