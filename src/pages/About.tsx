
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-herb-800 dark:text-herb-100 mb-6">About AYUSH</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-herb-800 dark:text-herb-100 mb-4">What is AYUSH?</h2>
            <p className="text-herb-700 dark:text-herb-300 mb-4">
              AYUSH is an acronym for the traditional systems of medicine practiced in India:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-herb-700 dark:text-herb-300 mb-4">
              <li><strong>A</strong>yurveda - One of the world's oldest holistic healing systems, developed in India thousands of years ago.</li>
              <li><strong>Y</strong>oga & Naturopathy - A system focusing on physical postures, breathing techniques, and meditation for holistic wellness.</li>
              <li><strong>U</strong>nani - A Greco-Arab medical system that originated in Greece, developed by Arabic physicians, and introduced to India by the Mughals.</li>
              <li><strong>S</strong>iddha - One of the oldest systems of medicine originating in southern India, with a strong connection to Tamil culture.</li>
              <li><strong>H</strong>omeopathy - A medical system based on the principle that "like cures like," developed in Germany but widely practiced in India.</li>
            </ul>
            <p className="text-herb-700 dark:text-herb-300">
              The Ministry of AYUSH was formed in 2014 by the Government of India to promote these traditional systems of healing and healthcare.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-herb-800 dark:text-herb-100 mb-4">Importance of Medicinal Plants in AYUSH</h2>
            <p className="text-herb-700 dark:text-herb-300 mb-4">
              Medicinal plants form the backbone of traditional AYUSH systems of medicine. They have been used for thousands of years for their therapeutic and healing properties. These plants contain various bioactive compounds that can help in preventing and treating different ailments.
            </p>
            <p className="text-herb-700 dark:text-herb-300">
              In the AYUSH systems, plants are not just viewed for their chemical constituents but are understood in terms of their properties like rasa (taste), guna (qualities), virya (potency), vipaka (post-digestive effect), and prabhava (special effects). This holistic understanding allows practitioners to use plants effectively for maintaining health and treating diseases.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-herb-800 dark:text-herb-100 mb-4">About This Project</h2>
            <p className="text-herb-700 dark:text-herb-300 mb-4">
              The Virtual Herbal Garden is an educational resource designed to help students and enthusiasts learn about medicinal plants used in AYUSH systems of medicine. Our goal is to provide a comprehensive, accessible, and visually engaging platform to explore these important plants.
            </p>
            <p className="text-herb-700 dark:text-herb-300 mb-4">
              This project aims to bridge the gap between traditional knowledge and modern accessibility, making it easier for students to identify, understand, and appreciate the rich heritage of medicinal plants in India.
            </p>
            <p className="text-herb-700 dark:text-herb-300">
              All information provided is for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
