import { ShieldCheck, TrendingUp, MapPin, Users } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  { title: 'Real Estate Consultant', description: 'Leading real estate consultant in Delhi NCR with years of expertise and a reputation for transparency.', icon: Users },
  { title: 'Investment Consultant', description: 'Top property investment consultant in Delhi NCR helping you find high-yield commercial assets.', icon: TrendingUp },
  { title: 'Prime NCR Locations', description: 'Strategic commercial property in Noida, Greater Noida, Ghaziabad, and Delhi NCR.', icon: MapPin },
  { title: 'Verified Listings', description: 'Exclusive access to office space for sale and retail shops from trusted developers.', icon: ShieldCheck },
];

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We are committed to providing the best real estate experience with a focus on trust and excellence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group text-center"
          >
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-red-600 group-hover:text-white transition-all">
              <feature.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
