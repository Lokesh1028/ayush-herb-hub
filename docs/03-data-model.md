# Chapter 3: Conceptual Data Model

The data model serves as the foundation of the AYUSH Herb Hub application, defining the structure and relationships of medicinal plant information. This chapter provides a comprehensive overview of the data architecture, entity relationships, and implementation details.

## Plant Data Structure

The core entity of the application is the `Plant` interface, which encapsulates all essential information about medicinal plants used in AYUSH systems. The data model has been designed to be comprehensive yet flexible, supporting various use cases from basic browsing to detailed research.

### Table 3.1: Plant Data Model Structure

| Field Name | Data Type | Description | Example | Validation Rules |
|------------|-----------|-------------|---------|------------------|
| `id` | string | Unique identifier for the plant | "aloe-vera" | Required, URL-safe, kebab-case |
| `commonName` | string | Popular name of the plant | "Aloe Vera" | Required, 2-100 characters |
| `botanicalName` | string | Scientific botanical name | "Aloe barbadensis" | Required, italicized format |
| `familyName` | string | Taxonomic family name | "Asphodelaceae" | Required, proper noun format |
| `imageUrl` | string | Path to plant image | "/src/data/images/alovera.jpeg" | Required, valid image path |
| `description` | string | Detailed plant description | "Aloe Vera is a succulent plant..." | Required, 100-1000 characters |
| `medicinalUses` | string[] | Array of medicinal applications | ["Soothes burns", "Anti-inflammatory"] | Min 1 item, max 20 items |
| `partsUsed` | string[] | Plant parts used medicinally | ["Inner leaf gel", "Leaf latex"] | Min 1 item, max 15 items |
| `ailmentsTreated` | string[] | Medical conditions treated | ["Minor burns", "Skin irritation"] | Min 1 item, max 25 items |
| `identificationTips` | string[] | Plant identification characteristics | ["Thick, fleshy leaves", "Rosette pattern"] | Min 1 item, max 20 items |

### TypeScript Interface Definition

```typescript
export interface Plant {
  id: string;
  commonName: string;
  botanicalName: string;
  familyName: string;
  imageUrl: string;
  description: string;
  medicinalUses: string[];
  partsUsed: string[];
  ailmentsTreated: string[];
  identificationTips: string[];
}
```

## Data Organization and Storage

### Static Data Approach
The current implementation uses a static data approach with the following advantages:
- **Performance**: No database queries, instant data access
- **Simplicity**: No complex backend infrastructure required
- **Reliability**: Data consistency and availability guaranteed
- **Cost-Effective**: No database hosting or maintenance costs

### Data File Structure
```
src/data/
├── plants.ts          # Main plant data and utility functions
├── images/           # Plant image assets
│   ├── alovera.jpeg
│   ├── ashwagandha.webp
│   ├── brahmi.webp
│   └── ...
└── types.ts          # TypeScript type definitions (future)
```

## Sample Data Examples

### Complete Plant Record: Aloe Vera
```json
{
  "id": "aloe-vera",
  "commonName": "Aloe Vera",
  "botanicalName": "Aloe barbadensis",
  "familyName": "Asphodelaceae",
  "imageUrl": "/src/data/images/alovera.jpeg",
  "description": "Aloe Vera is a succulent plant species known for its thick, fleshy leaves containing a soothing gel. It has been used for centuries in traditional medicine and skincare.",
  "medicinalUses": [
    "Soothes burns (sunburn, minor thermal burns)",
    "Moisturizes and heals skin",
    "Anti-inflammatory properties",
    "Laxative effect (from latex, use cautiously)",
    "Supports digestive health (inner leaf gel)"
  ],
  "partsUsed": [
    "Inner leaf gel",
    "Leaf latex (Aloin)"
  ],
  "ailmentsTreated": [
    "Minor burns and sunburn",
    "Skin irritation and wounds",
    "Dry skin",
    "Constipation (latex)",
    "Psoriasis patches"
  ],
  "identificationTips": [
    "Succulent with thick, fleshy, green leaves",
    "Leaves grow in a rosette pattern from the base",
    "Leaf edges often have small, soft teeth or serrations",
    "Produces yellow or orange tubular flowers on a tall stalk",
    "Cut leaf reveals clear inner gel and yellowish latex"
  ]
}
```

## Data Access Layer

### Utility Functions

The application provides several utility functions for data access and manipulation:

```typescript
// Get all plants
export const plants: Plant[] = [...];

// Get plant by ID
export const getPlantById = (id: string): Plant | undefined => {
  return plants.find(plant => plant.id === id);
};

// Search plants by name (common or botanical)
export const searchPlantsByName = (query: string): Plant[] => {
  const lowercaseQuery = query.toLowerCase();
  return plants.filter(plant => 
    plant.commonName.toLowerCase().includes(lowercaseQuery) ||
    plant.botanicalName.toLowerCase().includes(lowercaseQuery)
  );
};

// Search plants by ailment
export const searchPlantsByAilment = (query: string): Plant[] => {
  const lowercaseQuery = query.toLowerCase();
  return plants.filter(plant => 
    plant.ailmentsTreated.some(ailment => 
      ailment.toLowerCase().includes(lowercaseQuery)
    ) ||
    plant.medicinalUses.some(use => 
      use.toLowerCase().includes(lowercaseQuery)
    )
  );
};
```

### Search Algorithm Details

#### Name-Based Search
- **Case-Insensitive**: Converts all strings to lowercase for comparison
- **Partial Matching**: Uses `includes()` for substring matching
- **Multiple Fields**: Searches both common names and botanical names
- **Performance**: O(n) time complexity for linear search

#### Ailment-Based Search
- **Array Searching**: Searches through medicinal uses and ailments treated arrays
- **Comprehensive Coverage**: Includes both specific ailments and general medicinal uses
- **Flexible Matching**: Supports partial matches for better user experience
- **Relevance**: Returns plants with any matching ailment or use

## Database Schema (Future Enhancement)

For future scalability, the following relational database schema is proposed:

### Table 3.2: Proposed Database Schema

```sql
-- Plants table (main entity)
CREATE TABLE plants (
    id VARCHAR(50) PRIMARY KEY,
    common_name VARCHAR(100) NOT NULL,
    botanical_name VARCHAR(150) NOT NULL,
    family_name VARCHAR(100) NOT NULL,
    image_url VARCHAR(255),
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Medicinal uses (normalized)
CREATE TABLE medicinal_uses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id VARCHAR(50),
    use_description TEXT NOT NULL,
    effectiveness_level ENUM('High', 'Medium', 'Low'),
    FOREIGN KEY (plant_id) REFERENCES plants(id) ON DELETE CASCADE
);

-- Parts used (normalized)
CREATE TABLE parts_used (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id VARCHAR(50),
    part_name VARCHAR(100) NOT NULL,
    preparation_method TEXT,
    FOREIGN KEY (plant_id) REFERENCES plants(id) ON DELETE CASCADE
);

-- Ailments treated (normalized)
CREATE TABLE ailments_treated (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id VARCHAR(50),
    ailment_name VARCHAR(150) NOT NULL,
    severity ENUM('Mild', 'Moderate', 'Severe'),
    treatment_method TEXT,
    FOREIGN KEY (plant_id) REFERENCES plants(id) ON DELETE CASCADE
);

-- Identification tips (normalized)
CREATE TABLE identification_tips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id VARCHAR(50),
    tip_description TEXT NOT NULL,
    category ENUM('Leaves', 'Flowers', 'Stem', 'Root', 'Fruit', 'General'),
    FOREIGN KEY (plant_id) REFERENCES plants(id) ON DELETE CASCADE
);

-- Plant families (reference table)
CREATE TABLE plant_families (
    family_name VARCHAR(100) PRIMARY KEY,
    family_description TEXT,
    common_characteristics TEXT
);
```

## Data Validation and Quality

### Input Validation Rules
1. **Required Fields**: All core fields must be present and non-empty
2. **String Length**: Appropriate length limits to prevent data overflow
3. **Array Constraints**: Minimum and maximum item limits for array fields
4. **URL Validation**: Image URLs must be valid and accessible
5. **Botanical Name Format**: Must follow standard binomial nomenclature

### Data Quality Assurance
- **Standardized Formatting**: Consistent capitalization and punctuation
- **Medical Accuracy**: All medicinal information verified against reliable sources
- **Image Quality**: High-resolution images with consistent dimensions
- **Completeness**: No missing essential information for any plant entry

### Content Standards
- **Scientific Accuracy**: All botanical and medicinal information cross-verified
- **Language Clarity**: Clear, accessible language for educational use
- **Cultural Sensitivity**: Respectful representation of traditional knowledge
- **Legal Compliance**: Medicinal claims within appropriate educational context

---

**Navigation**: [← Previous: Chapter 2 - Project Planning](02-project-planning.md) | [Next: Chapter 4 - UI Design →](04-ui-design.md) 