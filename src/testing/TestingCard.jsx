import React from 'react';
import Button from '../components/Button/Button';
import Card, { CardHeader, CardBody, CardFooter, CardMedia } from '../components/Card';

const TestingCard = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <Card variant="default" hoverable width="md" className="max-w-lg">
      <CardMedia
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc"
        alt="Mountain landscape"
        height="lg"
        overlay={
          <div className="text-white text-sm">Photo by John Doe</div>
        }
      />
      
      <CardHeader
        title="Beautiful Mountains"
        subtitle="Posted on January 15, 2024"
        actions={
          <Button variant="ghost" size="sm">
            ⋮
          </Button>
        }
      />
      
      <CardBody>
        <p className="text-gray-600 mb-4">
          Experience the breathtaking views of mountain ranges. Perfect for hiking and photography.
        </p>
        <div className="flex gap-2 mb-2">
          <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
            Nature
          </span>
          <span className="px-2 py-1 bg-success-100 text-success-800 text-xs rounded-full">
            Adventure
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <Button variant="primary" size="sm" fullWidth onClick={() => alert('Primary clicked!')}>
            Primary Button
          </Button>
          <Button variant="outline" size="sm" fullWidth onClick={() => alert('Outline clicked!')}>
            Outline Button
          </Button>
        </div>
      </CardBody>
      
      <CardFooter
        actions={
          <>
            <Button variant="ghost" size="sm">
              Share
            </Button>
            <Button variant="primary" size="sm">
              Learn More
            </Button>
          </>
        }
      />
    </Card>
  </div>
);

export default TestingCard;