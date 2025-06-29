import MainSearchbar from '../../components/MainComponent.tsx/MainSearchBar';
import MainStory from '../../components/MainComponent.tsx/MainStory';
import MainPost from '../../components/MainComponent.tsx/MainPost';
import ReelStory from '../../components/MainComponent.tsx/ReelStory';
import MediaPost from '../../components/MainComponent.tsx/MediaPost';
const HomeComponent = () => {
  return (
<div className='grid grid-cols-1 space-y-4'>
    <MainSearchbar/>
    <MainStory/>
    <MainPost/>
    <ReelStory/>
    <MediaPost/>
</div>
  );
};

export default HomeComponent; 