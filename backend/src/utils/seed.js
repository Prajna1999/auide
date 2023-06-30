const { User, Tenant, Permission, AudioGuide, Branding, Exhibit } = require('../models');

async function seedDatabase() {
  try {
    for (let i = 1; i <= 5; i++) {
      // Create a tenant
      const tenant = await Tenant.create({ tenant_name: `Museum ${i}`, contact_email: `museum${i}@museum.com`, contact_number: `123-456-789${i}` });

      // Create a user
      const user = await User.create({ tenant_id: {i}, user_name: `elitecurator${i}`, user_email:`admin${i}@museum.com`, user_password:`3224fdf`, user_role:`viewer{i}` });

      // Create a permission
      const permission = await Permission.create({ user_id: user.id, tenant_id: tenant.id, role: 'admin' });

      // Create an audio guide
      const audioGuide = await AudioGuide.create({ title: `Guide ${i}`, description: `This is guide ${i}`, language: 'English', tenant_id: tenant.id });

      // Create a branding
      const branding = await Branding.create({ logo: `logo${i}.png`, primary_color: '#0000FF', secondary_color: '#808080', tenant_id: tenant.id });

      // Create an exhibit
      const exhibit = await Exhibit.create({ name: `Exhibit ${i}`, description: `This is exhibit ${i}`, tenant_id: tenant.id });
    }

    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database', error);
  }
}

seedDatabase();
