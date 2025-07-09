import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Maya Chef Website', () => {
  it('should load the homepage with correct content', () => {
    const indexPath = join(process.cwd(), 'src/pages/index.astro');
    const indexContent = readFileSync(indexPath, 'utf-8');
    
    // Check for essential content
    expect(indexContent).toContain('Maya Greenfeld');
    expect(indexContent).toContain('personal chef');
    expect(indexContent).toContain('recipe developer');
    expect(indexContent).toContain('dinner party curator');
    expect(indexContent).toContain('New York City');
  });

  it('should contain correct contact information', () => {
    const indexPath = join(process.cwd(), 'src/pages/index.astro');
    const indexContent = readFileSync(indexPath, 'utf-8');
    
    // Check for contact details
    expect(indexContent).toContain('mayagreenfeld@gmail.com');
    expect(indexContent).toContain('https://mayagreenfeld.substack.com/');
  });

  it('should include social media links', () => {
    const indexPath = join(process.cwd(), 'src/pages/index.astro');
    const indexContent = readFileSync(indexPath, 'utf-8');
    
    // Check for social media platforms
    expect(indexContent).toContain('mdi:instagram');
    expect(indexContent).toContain('ic:baseline-tiktok');
    expect(indexContent).toContain('mdi:email-outline');
    expect(indexContent).toContain('mdi:linkedin');
  });

  it('should have proper page structure', () => {
    const indexPath = join(process.cwd(), 'src/pages/index.astro');
    const indexContent = readFileSync(indexPath, 'utf-8');
    
    // Check for key sections
    expect(indexContent).toContain('Photo Collage Section');
    expect(indexContent).toContain('Short Intro Section');
    expect(indexContent).toContain('About Me Section');
    expect(indexContent).toContain('Newsletter Section');
    expect(indexContent).toContain('Contact Section');
    expect(indexContent).toContain('Social Links Section');
  });

  it('should use Layout component', () => {
    const indexPath = join(process.cwd(), 'src/pages/index.astro');
    const indexContent = readFileSync(indexPath, 'utf-8');
    
    expect(indexContent).toContain("import Layout from '../layouts/Layout.astro'");
    expect(indexContent).toContain('<Layout title="mouthful by Maya Greenfeld">');
  });
});