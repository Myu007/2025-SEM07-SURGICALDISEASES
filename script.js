const questions = [
  {
    question: "External hernias include the following, except for:",
    answers: [
      { text: "diagrammatic", correct: true },
      { text: "umbilical", correct: false },
      { text: " femoral", correct: false },
      { text: " inguinal", correct: false },
      { text: "lumbar", correct: false },
    ],
  },
  {
    question: "To the most rare forms of hernia",
    answers: [
      { text: "sciatic hernia", correct: true },
      { text: "inguinal hernia", correct: false },
      { text: "umbilical hernia", correct: false },
      { text: " femoral hernia", correct: false },
      { text: "postoperative hernia", correct: false },
    ],
  },
  {
    question: "Indication for emergency surgery in case of spontaneous reduction of a restrained hernia is",
    answers: [
      { text: "the appearance of peritoneal signs", correct: true },
      { text: "the presence of a hernial protrusion", correct: false },
      { text: "temperature rise", correct: false },
      { text: "dysuric phenomena", correct: false },
      { text: "The very fact of spontaneous reduction", correct: false },
    ],
  },
  {
    question: "The contents of the hernial sac may be, in addition to:  ",
    answers: [
      { text: "pancreas", correct: true },
      { text: "loops of the large intestine", correct: false },
      { text: "large oil seal", correct: false },
      { text: "bladder", correct: false },
      { text: "loops of the small intestine", correct: false },
    ],
  },
  {
    question: "The components of the hernial sac are the following, except ",
    answers: [
      { text: "for large oil seal", correct: true },
      { text: "neck", correct: false },
      { text: "the mouth", correct: false },
      { text: "body", correct: false },
      { text: "bottom", correct: false },
    ],
  },
  {
    question: "Which complication can arise if a femoral hernia becomes incarcerated? ",
    answers: [
      { text: "Strangulation of bowel tissue", correct: true },
      { text: "Stroke", correct: false },
      { text: "Heart attack", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "Joint dislocation", correct: false },
    ],
  },
  {
    question: "What is the most common treatment for femoral hernias?",
    answers: [
      { text: "Massage therapy", correct: true },
      { text: "Physical therapy", correct: false },
      { text: "Lifestyle changes", correct: false },
      { text: "Hernia repair surgery", correct: false },
      { text: "Medication", correct: false },
    ],
  },
  {
    question: "What term describes a midline hernia that occurs due to a natural weakness in the abdominal wall, often present at birth?",
    answers: [
      { text: "Congenital hernia", correct: true },
      { text: "Incarcerated hernia", correct: false },
      { text: " Recurrent hernia", correct: false },
      { text: "Acquired hernia", correct: false },
      { text: "Strangulated hernia", correct: false },
    ],
  },
  {
    question: "Which of the following factors is NOT typically associated with an increased risk of midline hernia development?",
    answers: [
      { text: " Regular physical activity", correct: true },
      { text: "Chronic coughing", correct: false },
      { text: "Pregnancy", correct: false },
      { text: "Abdominal trauma", correct: false },
      { text: "Smoking", correct: false },
    ],
  },
  {
    question: "What term describes a midline hernia that occurs at the site of a previous surgical incision?",
    answers: [
      { text: " Incisional hernia", correct: true },
      { text: "Indirect hernia", correct: false },
      { text: "Femoral hernia", correct: false },
      { text: "Direct hernia", correct: false },
      { text: "Sliding hernia", correct: false },
    ],
  },
  {
    question: "Which of the following factors is a common risk factor for developing midline hernias?",
    answers: [
      { text: "Obesity", correct: true },
      { text: " Regular exercise", correct: false },
      { text: "Vegetarian diet", correct: false },
      { text: "Youthfulness", correct: false },
      { text: "Hydration level", correct: false },
    ],
  },
  {
    question: "What term describes a midline hernia that occurs due to a natural weakness in the abdominal wall, often present at birth?",
    answers: [
      { text: "Congenital hernia ", correct: true },
      { text: "Incarcerated hernia", correct: false },
      { text: " Recurrent hernia", correct: false },
      { text: "Acquired hernia", correct: false },
      { text: "Strangulated hernia", correct: false },
    ],
  },
  {
    question: "Which of the following factors is NOT typically associated with an increased risk of midline hernia development?",
    answers: [
      { text: "Regular physical activity", correct: true },
      { text: "Chronic coughing", correct: false },
      { text: "Pregnancy", correct: false },
      { text: "Abdominal trauma", correct: false },
      { text: "Smoking", correct: false },
    ],
  },
  {
    question: "Second most common position for the appendix is",
    answers: [
      { text: "Pelvic ", correct: true },
      { text: "Subcaecal", correct: false },
      { text: "Retrocaecal", correct: false },
      { text: "Paracecal", correct: false },
      { text: "None ", correct: false },
    ],
  },
  {
    question: "Which if the following is not a sign to elicit appendicitis?",
    answers: [
      { text: " None of the above ", correct: true },
      { text: "Obturator sign", correct: false },
      { text: "Cutaneous hyperaesthesia", correct: false },
      { text: "Pointing sign", correct: false },
      { text: "None ", correct: false },
    ],
  },
  {
    question: "Most common post operative complication of Appendicectomy is",
    answers: [
      { text: "Wound infection ", correct: true },
      { text: "Adhesive intestinal obstruction", correct: false },
      { text: "Abscess formation", correct: false },
      { text: "Portal Pyemia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a common symptom of acute appendicitis?",
    answers: [
      { text: "Chest pain ", correct: true },
      { text: "Nausea", correct: false },
      { text: "Lower right abdominal pain", correct: false },
      { text: " Fever", correct: false },
      { text: "Loss of appetite", correct: false },
    ],
  },
  {
    question: "Which of the following are the bariatric surgical procedures?",
    answers: [
      { text: " All the above ", correct: true },
      { text: "Roux-en Y gastric bypass", correct: false },
      { text: "Biliopancreatic diversion", correct: false },
      { text: "Vertical banded gastroplasty", correct: false },
      { text: "None ", correct: false },
    ],
  },
  {
    question: "A 35-year-old man presents with a bleeding duodenal ulcer documented by endoscopy. The patient is somewhat unstable, and bleeding does not stop despite transfusing 8 U of blood. What is the most appropriate surgical therapy?",
    answers: [
      { text: "Oversewing the ulcer and performing a vagotomy and pyloroplasty ", correct: true },
      { text: "Oversewing the ulcer alone", correct: false },
      { text: "Oversewing the ulcer and performing a gastrojejunostomy", correct: false },
      { text: "Further blood transfusion alone", correct: false },
      { text: "Allvthe above", correct: false },
    ],
  },
  {
    question: "A 46-year-old man present with dysphagia of recent onset. His esophogram shows a lesion in the lower third of his esophagus. Biopsy of the lesion shows adenocarcinoma. His general medical condition is excellent, and his metastatic workup is negative. What should his management involve?",
    answers: [
      { text: "Surgical resection of the esophagus ", correct: true },
      { text: "Radiation therapy", correct: false },
      { text: "Insertion of a stent to improve swallowing", correct: false },
      { text: "Chemotherapy", correct: false },
      { text: "Conservative treatment", correct: false },
    ],
  },
  {
    question: "What is the role of prostaglandin analogs, such as misoprostol, in ulcer treatment?",
    answers: [
      { text: "  Promoting mucus secretion and reducing acid damage", correct: true },
      { text: "Inhibiting acid production", correct: false },
      { text: "Killing Helicobacter pylori bacteria", correct: false },
      { text: "Neutralizing stomach acid", correct: false },
      { text: "All the above", correct: false },
    ],
  },
  {
    question: "Which antibiotic is commonly used to eradicate Helicobacter pylori in the treatment of peptic ulcers?",
    answers: [
      { text: "Amoxicillin", correct: true },
      { text: "Ciprofloxacin", correct: false },
      { text: "Metronidazole", correct: false },
      { text: "Doxycycline ", correct: false },
      { text: "All the above", correct: false },
    ],
  },
  {
    question: "    Patients with dysphagia secondary to esophageal cancer treated with radiation can expect the benefit to last.",
    answers: [
      { text: "     6-12 months  ", correct: true },
      { text: "    2-3 months", correct: false },
      { text: " <1 month", correct: false },
      { text: " > 12 months", correct: false },
      { text: "1 week", correct: false },
    ],
  },
  {
    question: "How long after completion of neoadjuvant chemoradiotherapy should esophagectomy be performed?",
    answers: [
      { text: "  2 weeks", correct: true },
      { text: "  6-8 weeks", correct: false },
      { text: "    4-6 weeks", correct: false },
      { text: "  8-10 weeks", correct: false },
      { text: "6 months", correct: false },
    ],
  },
  {
    question: "    Which of the following is a risk factor for the development of Barret’s esophagus, a condition associated with chronic gastroesophageal reflux disease (GERD) ? ",
    answers: [
      { text: "  Obesity ", correct: true },
      { text: "  High – fiber diet", correct: false },
      { text: " Regular exercise", correct: false },
      { text: "    Non – smoking", correct: false },
      { text: "Spicy food", correct: false },
    ],
  },
  {
    question: "   Common symptoms of Mallory-weiss tear:",
    answers: [
      { text: "   Hematemesis", correct: true },
      { text: "   Dysphagia", correct: false },
      { text: "    Subcutaneous emphysema", correct: false },
      { text: "   Epigastric pain", correct: false },
      { text: "Melena", correct: false },
    ],
  },
  {
    question: "What complications can occur with acute cholecystitis?",
    answers: [
      { text: "Peritonitis", correct: true },
      { text: "Acute pancreatitis", correct: false },
      { text: "Hepatitis", correct: false },
      { text: "Gastritis", correct: false },
      { text: "Oncological diseases", correct: false },
    ],
  },
  {
    question: "What medications are most often used to treat acute cholecystitis?",
    answers: [
      { text: "Antibiotics", correct: true },
      { text: "Aspirin", correct: false },
      { text: "Anti-inflammatory drugs", correct: false },
      { text: "Antihistamines", correct: false },
      { text: "Antifungal agents", correct: false },
    ],
  },
  {
    question: "What factors can contribute to the development of acute cholecystitis?",
    answers: [
      { text: " All of the above", correct: true },
      { text: "Overeating and lack of physical activity", correct: false },
      { text: "Heredity", correct: false },
      { text: "Alcohol and smoking use", correct: false },
      { text: "Diet rich in fatty foods", correct: false },
    ],
  },
  {
    question: "What complications can occur with acute cholecystitis?",
    answers: [
      { text: "Peritonitis", correct: true },
      { text: "Acute pancreatitis", correct: false },
      { text: "Hepatitis", correct: false },
      { text: "Gastritis", correct: false },
      { text: "Oncological diseases", correct: false },
    ],
  },
  {
    question: "What complications can occur with acute pancreatitis?",
    answers: [
      { text: " Peritonitis ", correct: true },
      { text: "Diabetes mellitus", correct: false },
      { text: "Hepatitis", correct: false },
      { text: "Osteoarthritis", correct: false },
      { text: "Acute gastritis", correct: false },
    ],
  },
  {
    question: "Which diagnostic method helps confirm the diagnosis of acute pancreatitis?",
    answers: [
      { text: " Ultrasound of the abdominal cavity  ", correct: true },
      { text: "ECG", correct: false },
      { text: "Laboratory urine test", correct: false },
      { text: "X-ray of the stomach", correct: false },
      { text: "Tomography of the head", correct: false },
    ],
  },
  {
    question: "What symptoms usually accompany acute pancreatitis?",
    answers: [
      { text: "Abdominal pain, vomiting, elevated blood amylase levels", correct: true },
      { text: "Headache, weakness, loss of appetite", correct: false },
      { text: "High blood pressure, swelling, skin rashes", correct: false },
      { text: "Mood swings, apathy, drowsiness", correct: false },
      { text: "Chest pain, cough, shortness of breath", correct: false },
    ],
  },
  {
    question: "Which of the following factors are possible causes of acute pancreatitis?",
    answers: [
      { text: "All of the above ", correct: true },
      { text: "Drinking alcohol", correct: false },
      { text: "Heredity", correct: false },
      { text: "Acute respiratory infection", correct: false },
      { text: "Chronic stress", correct: false },
    ],
  },
  {
    question: "What is the prognosis of alveolar hydatid disease without treatment?",
    answers: [
      { text: "None of the above ", correct: true },
      { text: "Chronic infection leading to organ failure", correct: false },
      { text: "Spontaneous resolution", correct: false },
      { text: "No symptoms", correct: false },
      { text: "Complete recovery", correct: false },
    ],
  },
  {
    question: "Which of the following is a risk factor for developing liver abscess?",
    answers: [
      { text: "Recent abdominal surgery", correct: true },
      { text: "Healthy eating", correct: false },
      { text: "Regular exercise", correct: false },
      { text: "Don't smoke", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is portal hypertension?",
    answers: [
      { text: " High blood pressure in the portal vein and its branches ", correct: true },
      { text: "High blood pressure in the arteries", correct: false },
      { text: "Low blood pressure in the veins", correct: false },
      { text: "Low blood pressure in the arteries", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is the most common cause of portal hypertension?",
    answers: [
      { text: "cirrhosis of the liver", correct: true },
      { text: "kidney disease", correct: false },
      { text: "heart failure", correct: false },
      { text: "diabetes mellitus", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "What additional examination methods can help confirm the diagnosis of splenic cyst?",
    answers: [
      { text: "Ultrasound (ultrasound examination)", correct: true },
      { text: "CT (computed tomography)", correct: false },
      { text: "MRI (magnetic resonance imaging)", correct: false },
      { text: "Radiography", correct: false },
      { text: "Endoscopy", correct: false },
    ],
  },
  {
    question: "Which of the following situations most often results in splenic injury?",
    answers: [
      { text: "Collision in contact sports ", correct: true },
      { text: "Fall from height", correct: false },
      { text: "Car accident", correct: false },
      { text: "Knife wound", correct: false },
      { text: "Surgical intervention", correct: false },
    ],
  },
  {
    question: "What is the most common cause of intestinal obstruction?",
    answers: [
      { text: "Tumor ", correct: true },
      { text: "Infection", correct: false },
      { text: "Inflammation", correct: false },
      { text: "Trauma", correct: false },
      { text: "Congenital anomalies", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms may indicate intestinal obstruction?",
    answers: [
      { text: "Tension and distension of the abdomen ", correct: true },
      { text: "Lack of appetite", correct: false },
      { text: "Pain in the lower back", correct: false },
      { text: "Pain in the heart area", correct: false },
      { text: "Dizziness", correct: false },
    ],
  },
  {
    question: "What additional examination is often used to diagnose intestinal obstruction?",
    answers: [
      { text: "X-ray of the intestine with a barium stain ", correct: true },
      { text: "Chest X-ray", correct: false },
      { text: "Ultrasound examination of the abdomen", correct: false },
      { text: "Electrocardiogram (ECG)", correct: false },
      { text: "Blood test for thyroid hormones", correct: false },
    ],
  },
  {
    question: "Which of the following treatment methods can be used for intestinal obstruction?",
    answers: [
      { text: "Surgery ", correct: true },
      { text: "Use of medications", correct: false },
      { text: "Radiotherapy", correct: false },
      { text: "Electroconvulsive therapy", correct: false },
      { text: "Abdominal massage", correct: false },
    ],
  },
  {
    question: "What can cause mechanical intestinal obstruction?",
    answers: [
      { text: " Foreign object in the intestine ", correct: true },
      { text: "Intestinal rupture", correct: false },
      { text: "Intestinal inflammation", correct: false },
      { text: "Impaired intestinal motility", correct: false },
      { text: "Lack of enzymes", correct: false },
    ],
  },
  {
    question: "What diagnostic method can help identify mechanical intestinal obstruction?",
    answers: [
      { text: "  Ultrasound of the abdominal cavity ", correct: true },
      { text: "X-ray of the abdomen with barium contrast", correct: false },
      { text: "CT scan", correct: false },
      { text: "ECG", correct: false },
      { text: "General blood test", correct: false },
    ],
  },
  {
    question: "What is dynamic intestinal obstruction?",
    answers: [
      { text: "Impaired movement of digestive contents in the intestines ", correct: true },
      { text: "Intestinal inflammation", correct: false },
      { text: "Irritable bowel syndrome", correct: false },
      { text: "Appendicitis", correct: false },
      { text: "Gastritis", correct: false },
    ],
  },
  {
    question: "What are the causes of dynamic intestinal obstruction?",
    answers: [
      { text: "Damage to the intestinal wall  ", correct: true },
      { text: "Stress", correct: false },
      { text: "Congenital intestinal anomalies", correct: false },
      { text: "Overeating", correct: false },
      { text: "Acute respiratory viral infection", correct: false },
    ],
  },
  {
    question: "What signs indicate possible intra-abdominal bleeding with strangulation intestinal obstruction?",
    answers: [
      { text: "Pale skin and mucous membranes", correct: true },
      { text: "Increased body temperature", correct: false },
      { text: "Increased heart rate", correct: false },
      { text: "Change in hair color", correct: false },
      { text: "Increased appetite", correct: false },
    ],
  },
  {
    question: "What organs can be affected by complications of strangulated intestinal obstruction?",
    answers: [
      { text: "Intestines and abdominal cavity ", correct: true },
      { text: "Liver and kidneys", correct: false },
      { text: "Stomach and esophagus", correct: false },
      { text: "Heart and lungs", correct: false },
      { text: "Spleen and pancreas", correct: false },
    ],
  },
  {
    question: "What is the most common cause of peritonitis?",
    answers: [
      { text: "Intestinal perforation ", correct: true },
      { text: "Gastric ulcer", correct: false },
      { text: "Gastritis", correct: false },
      { text: "Pancreatitis", correct: false },
      { text: "Food poisoning", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms is most characteristic of peritonitis?",
    answers: [
      { text: " Pain in the abdomen, aggravated by movement and breathing ", correct: true },
      { text: "Increased appetite", correct: false },
      { text: "Constant gas formation", correct: false },
      { text: "No burning sensation when urinating", correct: false },
      { text: "Fatigue and weakness", correct: false },
    ],
  },
  {
    question: "What diagnostic method is used to confirm the diagnosis of peritonitis?",
    answers: [
      { text: "Laparoscopy ", correct: true },
      { text: "CT scan of the abdomen", correct: false },
      { text: "Laboratory blood test", correct: false },
      { text: "X-ray examination", correct: false },
      { text: "Ultrasound of the abdominal cavity", correct: false },
    ],
  },
  {
    question: "What treatment is needed for peritonitis?",
    answers: [
      { text: "Surgery to remove the cause of peritonitis", correct: true },
      { text: "Diet and rest", correct: false },
      { text: "Use of antibiotics", correct: false },
      { text: "Abdominal massage", correct: false },
      { text: "Treatment with anti-inflammatory drugs", correct: false },
    ],
  },
  {
    question: "What is the main cause of Hirschsprung's disease?",
    answers: [
      { text: "Genetic disorder of intestinal motility", correct: true },
      { text: "Viral infection", correct: false },
      { text: "Lack of vitamins", correct: false },
      { text: "Allergic reaction to food", correct: false },
      { text: "Stress", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms is characteristic of Hirschsprung's disease in newborns?",
    answers: [
      { text: "Constipation ", correct: true },
      { text: "Diarrhea", correct: false },
      { text: "Involuntary urination", correct: false },
      { text: "Change in skin color in the abdominal area", correct: false },
      { text: "Fatigue and weakness", correct: false },
    ],
  },
  {
    question: "What method can be used to confirm the diagnosis of Hirschsprung's disease?",
    answers: [
      { text: "Colonoscopy", correct: true },
      { text: "Ultrasound of the abdominal cavity", correct: false },
      { text: "X-ray examination", correct: false },
      { text: "Fecal occult blood test", correct: false },
      { text: "CT scan of the abdomen", correct: false },
    ],
  },
  {
    question: "What is the treatment for Hirschsprung's disease?",
    answers: [
      { text: "Use of laxatives", correct: true },
      { text: "Diet and exercise", correct: false },
      { text: "Surgery to remove the affected part of the intestine", correct: false },
      { text: "Psychotherapy", correct: false },
      { text: "Intestinal massage", correct: false },
    ],
  },
  {
    question: "What nutritional recommendations are often given to patients with chronic ulcerative colitis during exacerbations?",
    answers: [
      { text: " Low residue diet ", correct: true },
      { text: "Dairy products", correct: false },
      { text: "High fiber diet", correct: false },
      { text: "Spicy food", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which part of the digestive system is predominantly affected in chronic ulcerative colitis?",
    answers: [
      { text: "Large intestine ", correct: true },
      { text: "Small intestine", correct: false },
      { text: "Stomach", correct: false },
      { text: "Liver", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is the main cause of hemorrhoids?",
    answers: [
      { text: "Tension during defecation ", correct: true },
      { text: "Inflammation of the pancreas", correct: false },
      { text: "Viral infection ", correct: false },
      { text: "Allergic reaction to certain foods", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a common symptom of internal hemorrhoids?",
    answers: [
      { text: "Bright red blood in the stool ", correct: true },
      { text: "Severe itching and burning", correct: false },
      { text: "Visible swelling around the anus", correct: false },
      { text: "Painful lumps outside the anus", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What treatments can be used for chronic anal abscess?",
    answers: [
      { text: "What treatments can be used for chronic anal abscess? ", correct: true },
      { text: "What treatments can be used for chronic anal abscess?", correct: false },
      { text: "What treatments can be used for chronic anal abscess?", correct: false },
      { text: "What treatments can be used for chronic anal abscess?", correct: false },
      { text: "What treatments can be used for chronic anal abscess?", correct: false },
    ],
  },
  {
    question: "What factors can contribute to the development of chronic anal abscess?",
    answers: [
      { text: "Overeating fatty and spicy foods ", correct: true },
      { text: "Proper nutrition and regular exercise", correct: false },
      { text: "Calm emotional atmosphere", correct: false },
      { text: "Drinking regime", correct: false },
      { text: "Regular medical examinations", correct: false },
    ],
  },
  {
    question: "What is the most common symptom of rectal prolapse?",
    answers: [
      { text: "Feeling of incomplete bowel movement ", correct: true },
      { text: "Bleeding from the anus", correct: false },
      { text: "Kidney failure", correct: false },
      { text: "Increased body temperature", correct: false },
      { text: "Increased sweating", correct: false },
    ],
  },
  {
    question: "What diagnostic method is often used to determine rectal prolapse?",
    answers: [
      { text: "Proctosigmoidoscopy ", correct: true },
      { text: "Colonoscopy", correct: false },
      { text: "CT scan of the head", correct: false },
      { text: "Cystoscopy", correct: false },
      { text: "Ultrasound of the abdominal cavity", correct: false },
    ],
  },
  {
    question: "Which of the following elements is required by the thyroid gland to make thyroxine hormone?",
    answers: [
      { text: "Iodine ", correct: true },
      { text: "Selen", correct: false },
      { text: "Magnesium", correct: false },
      { text: "Calcium", correct: false },
      { text: "Iron", correct: false },
    ],
  },
  {
    question: "What is not an indication of surgery over Radio Active Iodine (RAI) therapy in Grave's disease?",
    answers: [
      { text: "thyroid gland 50g ", correct: true },
      { text: "young patient", correct: false },
      { text: "old patient", correct: false },
      { text: "suspicious thyroid nodule", correct: false },
      { text: "desire to conceive soon", correct: false },
    ],
  },
  {
    question: "40-year-old lady was on antithyroid medications which she stopped for 2 weeks. She presented in emergency with high grade fever and hypotension. What is not a part of further management?",
    answers: [
      { text: "radio active iodine ", correct: true },
      { text: "beta-blockers", correct: false },
      { text: "Oxygen", correct: false },
      { text: "lugol's idodine", correct: false },
      { text: "corticosteroids", correct: false },
    ],
  },
  {
    question: "A complication of thyroidectomy which can be prevented by prophylaxis is:",
    answers: [
      { text: "thyroid storm", correct: true },
      { text: "hypocalcemia", correct: false },
      { text: "hypercalcemia", correct: false },
      { text: " injury to recurrent laryngeal nerve", correct: false },
      { text: "light thyrotoxicosis", correct: false },
    ],
  },
  {
    question: "The etiological factors of primary hypothyroidism can be all of the above, except:",
    answers: [
      { text: "Simmonds syndrome ", correct: true },
      { text: "Endemic goiter and cretinism", correct: false },
      { text: "Inflammatory thyroid disease", correct: false },
      { text: "Abnormalities of the thyroid gland", correct: false },
      { text: "Radioactive iodine therapy", correct: false },
    ],
  },
  {
    question: "The etiological factors of primary hypothyroidism can be all of the following fermentopathies, except:",
    answers: [
      { text: "Increase the activity of the enzyme iodotyrosine indiodiasis ", correct: true },
      { text: "Iodine peroxidase enzyme enzyme defect", correct: false },
      { text: "Defect of enzymes involved in the process of formation of thyroxine and triiodothyronine", correct: false },
      { text: "Defect of enzymes that control the release of thyroid hormones (proteolysis)", correct: false },
      { text: "A defect in the system that carries out the capture of iodide from blood plasma and its trasnsport through the thyroid cell membrane", correct: false },
    ],
  },
  {
    question: "Where are parathyroid glands present?",
    answers: [
      { text: "posterior surface of lateral lobes of thyroid", correct: true },
      { text: "posterior to stomach", correct: false },
      { text: "on top of kidneys", correct: false },
      { text: "upper chest under breastbone", correct: false },
      { text: "anterior surface of lateral lobes of thyroid", correct: false },
    ],
  },
  {
    question: "In a child of 15 years age, plasma calcium level is diagnosed below optimum level. Which organ is malfunctioning?",
    answers: [
      { text: "parathyroid ", correct: true },
      { text: "liver", correct: false },
      { text: "thyroid gland", correct: false },
      { text: "posterior lobe of pituitary", correct: false },
      { text: "anterior lobe of pituitary", correct: false },
    ],
  },
  {
    question: "What can stimulate aldosterone secretion?",
    answers: [
      { text: "increase K+ in blood", correct: true },
      { text: "increase Na+ in blood", correct: false },
      { text: "increase Ca2+", correct: false },
      { text: "CRH", correct: false },
      { text: "ANP", correct: false },
    ],
  },
  {
    question: "What is the enzyme found in adrenal medulla that converts norepinephrine to epinephrine?",
    answers: [
      { text: "phenylethanolamine N-methyltransferase (PNMT) ", correct: true },
      { text: "nuclease", correct: false },
      { text: "tyrosine hydroxylase", correct: false },
      { text: "phenylalanine hydroxylase", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In people with diabetes mellitus, changes in the feet are common and difficult to treat. Which every-day practice should be avoided by people with diabetes mellitus?",
    answers: [
      { text: "going barefoot ", correct: true },
      { text: "clipping toenails", correct: false },
      { text: "wearing athletic shoes", correct: false },
      { text: "using moisturizer on the feet ", correct: false },
      { text: "wearing socks", correct: false },
    ],
  },
  {
    question: "Which of the following is the underlying cause of most diabetic health complications?",
    answers: [
      { text: "blood vessel narrowing", correct: true },
      { text: "atherosclerosis", correct: false },
      { text: "hypoglycemia", correct: false },
      { text: "nerve damage", correct: false },
      { text: "hypocalcemia", correct: false },
    ],
  },
  {
    question: "What is called a pneumothorax that causes mediastinal shift and compression of the functioning lung?",
    answers: [
      { text: "Tension pneumothorax ", correct: true },
      { text: "Secondary pneumothorax", correct: false },
      { text: "Traumatic pneumothorax", correct: false },
      { text: "Spontaneous pneumothorax", correct: false },
      { text: "Primary pneumothorax", correct: false },
    ],
  },
  {
    question: "How is a pneumothorax of <30% treated?",
    answers: [
      { text: "usually requires hospital admission if it is secondary to respiratory disease ", correct: true },
      { text: "is generally asymptomatic", correct: false },
      { text: "will always be aspirated whatever the type", correct: false },
      { text: "is treated with pleurodesis", correct: false },
      { text: "is immediately hospitalized", correct: false },
    ],
  },
  {
    question: "What is a particular risk of a secondary pneumothorax?",
    answers: [
      { text: "A mechanical ventilation for lung disease", correct: true },
      { text: "Tuberculosis", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "Asthma", correct: false },
      { text: "Pleural effusion", correct: false },
    ],
  },
  {
    question: "Which of the following refers to blood in the pleural space?",
    answers: [
      { text: "Hemothorax ", correct: true },
      { text: "Pyothorax", correct: false },
      { text: "Hydrothorax", correct: false },
      { text: "Pneumothorax", correct: false },
      { text: "Pneumonia", correct: false },
    ],
  },
  {
    question: "Which of the following is the most often cause of lung abscesses? ",
    answers: [
      { text: "Aspiration of oral secretions", correct: true },
      { text: " Endobronchial obstruction", correct: false },
      { text: "Hematogenous seeding of the lungs", correct: false },
      { text: "Immunosuppression after transplantation", correct: false },
      { text: "Alcohol intoxication", correct: false },
    ],
  },
  {
    question: "Symptoms of abscess due to anaerobic bacteria or mixed anaerobic and aerobic bacteria are different from symptoms of abscess due to aerobic bacteria alone. Which of the following suggests that a lung abscess results from aerobic bacteria?",
    answers: [
      { text: "Symptoms develop acutely and resemble those of pneumonia ", correct: true },
      { text: "Sputum smells fouls", correct: false },
      { text: "Symptoms develop over weeks or months", correct: false },
      { text: "Symptoms include pleuritic chest pain", correct: false },
      { text: "No symptoms", correct: false },
    ],
  },
  {
    question: "In bronchiectasis, chest X-ray is usually abnormal and may be diagnostic, CBC and differential can help determine the severity of disease activity and identify eosinophilia. Patients with eosinophilia should have additional testing to rule out which of the following?",
    answers: [
      { text: "Allergic bronchopulmonary aspergillosis", correct: true },
      { text: "Cystic fibrosis", correct: false },
      { text: "Goodpasture syndrome", correct: false },
      { text: "Lower lobe emphysema", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
    ],
  },
  {
    question: "Which statement is NOT true concerning bronchiectasis?",
    answers: [
      { text: "It can rarely be detected by radiographic imaging ", correct: true },
      { text: "Finger clubbing is often seen in patients with bronchiectasis", correct: false },
      { text: "Most cases in the United Kingdom are associated with cystic fibrosis", correct: false },
      { text: "It is caused by persistent infection and inflammation in proximal bronchi", correct: false },
      { text: "Everything is correct", correct: false },
    ],
  },
  {
    question: "What structure is pleurisy inflammation of?",
    answers: [
      { text: "pleura ", correct: true },
      { text: "epithelium", correct: false },
      { text: "pericardium", correct: false },
      { text: "pulmonary arch", correct: false },
      { text: "lung", correct: false },
    ],
  },
  {
    question: "What is another term for pleurisy?",
    answers: [
      { text: "pleuritis", correct: true },
      { text: "arthritis", correct: false },
      { text: "appendicitis", correct: false },
      { text: "muritis", correct: false },
      { text: "mediastinitis", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy presents with a large anterior mediastinal mass. The mass displaces the mediastinal arteries and veins and there is vascular invasion into the superior vena cava. Which of the following tumors is the most likely?",
    answers: [
      { text: "Diffuse large B cell lymphoma ", correct: true },
      { text: "Burkitt lymphoma", correct: false },
      { text: "Anaplastic large cell lymphoma", correct: false },
      { text: "Hodgkin lymphoma", correct: false },
      { text: "Lymphoblastic lymphoma", correct: false },
    ],
  },
  {
    question: "A thymoma is found to invade through the capsule into adjacent mediastinal fat or pleura. What is the stage according to the Masaoka staging system?",
    answers: [
      { text: " II", correct: true },
      { text: "I", correct: false },
      { text: "III", correct: false },
      { text: "Iva", correct: false },
      { text: "Ivb", correct: false },
    ],
  },
  {
    question: "A 63-year-old man has had insulin dependent diabetes mellitus for over two decades. The degree of control of his disease is indicated by the lab finding of hemoglobin A1C 10.1%. He has noted episodes of abdominal pain following meals. These episodes have worsened over the past year. On physical examination, there are no masses and no organomegaly of the abdomen, and he has no tenderness to palpation. Which of the following pathologic findings is most likely to be present in this man?",
    answers: [
      { text: "mesenteric artery occlusion ", correct: true },
      { text: "hepatic infarction", correct: false },
      { text: "ruptured aortic aneurysm", correct: false },
      { text: "atherosclerotic occlusion of arteries", correct: false },
      { text: "chronic renal failure", correct: false },
    ],
  },
  {
    question: "A 66-year-old man with parkinson disease develops pleuritic chest pain. On examination, he has guarding over the right lower lung with dullness to percusiion. A chest CT scan shows a focal, wedge-shaped pleural based area of hemorrhage in the right lower lobe. Which of the following is the most likely cause for his pulmonary lesion?",
    answers: [
      { text: "embolism", correct: true },
      { text: "atherosclerosis", correct: false },
      { text: "vasculitis", correct: false },
      { text: "arteriolosclerosis", correct: false },
      { text: "thrombosis", correct: false },
    ],
  },
  {
    question: "A study of atherogenesis is performed. There is a propensity for atheromas to form at muscular arterial branch points, such as the carotid and aortic bifurcations. Which of the following events in the arteries at these locations is most likely to initiate atherogenesis?",
    answers: [
      { text: "endothelial dysfunction ", correct: true },
      { text: "collagen synthesis", correct: false },
      { text: "lactic acidosis", correct: false },
      { text: "cholesterol breakdown", correct: false },
      { text: "Hypoxemia", correct: false },
    ],
  },
  {
    question: "A 66-year-old woman has the sudden loss of movement on part of the left side of her body. She has vital signs including T 37,1C, P 80/minute, RR 16/minute, and BP 160/100 mmHg. She has smoked a pack of cigarettes a day for the past 45 years. Which of the following components of blood lipids is most important in contributing to her disease?",
    answers: [
      { text: "oxidized LDL ", correct: true },
      { text: "lipoprotein lipase", correct: false },
      { text: "chylomicrons", correct: false },
      { text: "VLDL", correct: false },
      { text: "HDL cholesterol", correct: false },
    ],
  },
  {
    question: "A 76-year-old man enters the ER with complaints of back pain and feeling fatigued. Upon examination, his blood pressure is 190/100, pulse is 118, and hematocrit are both low. The nurse palpates the abdomen which is soft, non-tender and auscultates an abdominal pulse. The most likely diagnosis:",
    answers: [
      { text: "Aneurysm ", correct: true },
      { text: "Buerger's disease", correct: false },
      { text: "Secondary hypertension", correct: false },
      { text: "CHF", correct: false },
      { text: "Myocardial infarction", correct: false },
    ],
  },
  {
    question: "Which of the following is not directly related with Buerger's disease?",
    answers: [
      { text: "night sweats", correct: true },
      { text: "poor tolerance of cold", correct: false },
      { text: "thromboangitis obliterans", correct: false },
      { text: "claudication", correct: false },
      { text: "pain", correct: false },
    ],
  },
  {
    question: "What is a possible risk of having a pulmonary embolism?",
    answers: [
      { text: "sudden death", correct: true },
      { text: "diabetes", correct: false },
      { text: "high blood pressure", correct: false },
      { text: "amputation of limbs", correct: false },
      { text: "Myocardial infarction", correct: false },
    ],
  },
  {
    question: "What is the percentage of people who have had DVT or PE for a risk of another episode?",
    answers: [
      { text: "0.25", correct: true },
      { text: "0.5", correct: false },
      { text: "0.75", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: false },
    ],
  },
  {
    question: "What is happening on the inside of a bulging varicose vein?",
    answers: [
      { text: "swelling in the legs creates bottlenekcs in the veins, stopping the blood from getting through.", correct: true },
      { text: "some veins are thicker than others and bulge out on the surface of the skin", correct: false },
      { text: "the one-way valves inside the vein stop working and prevent blood from being pumped forward", correct: false },
      { text: "the blood leaks backwards and the vein bulges out", correct: false },
      { text: "a build-up of toxins in certain secretions of veins, causing the vein to engorge", correct: false },
    ],
  },
  {
    question: "Apart from ongoing pain and swelling, what are the complications of untreated severe varicose veins?",
    answers: [
      { text: "All of the above ", correct: true },
      { text: "Superficial thrombophlebitis", correct: false },
      { text: "sores or ulcers on the skin near the problem vein", correct: false },
      { text: "eczema on the skin near the problem vein", correct: false },
      { text: "Deep vein thrombosis", correct: false },
    ],
  },
  {
    question: "Which of the following statements is true?",
    answers: [
      { text: " Femoral hernia is more common on the right side ", correct: true },
      { text: "Indirect hernia is more common on the right side.", correct: false },
      { text: "Both are true", correct: false },
      { text: "none is true", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "Which of the following statements is false about hernia repair?",
    answers: [
      { text: "Stoppa-Rives repair involves a cone- shaped polypropylene plug inserted into the internal inguinal ring ", correct: true },
      { text: "Bassini's repair is between the inguinal unliagament and conjoint tendon", correct: false },
      { text: "McVay's repair is also useful for femoral hernia", correct: false },
      { text: "Shouldice repair is a multilayered repair unliagament and conjoint tendon", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "True about direct inguinal hernia is ",
    answers: [
      { text: "Medial to the inferior epigastric artery", correct: true },
      { text: "Cough impulse felt on the index finger", correct: false },
      { text: "Usually descends till the bottom of scrotum", correct: false },
      { text: "All of the above", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "The predisposing factors in the development of hernias include, in addition to",
    answers: [
      { text: "trauma to the abdominal wall ", correct: true },
      { text: "age, gender", correct: false },
      { text: "physique features", correct: false },
      { text: "constipation, prolonged cough", correct: false },
      { text: "heredity", correct: false },
    ],
  },
  {
    question: "A 60-year-old man presents with a painful, irreducible lump in his groin that he noticed while lifting heavy furniture. He also complains of nausea and vomiting along with abdominal distension. What complication of inguinal hernia is he likely experiencing?",
    answers: [
      { text: "Strangulation ", correct: true },
      { text: "Incarceration", correct: false },
      { text: "Seroma formation", correct: false },
      { text: "Adhesion", correct: false },
      { text: "Hematoma", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms is commonly associated with femoral hernias?",
    answers: [
      { text: "Visible bulge in the groin ", correct: true },
      { text: "Lower back pain", correct: false },
      { text: "Nausea", correct: false },
      { text: "Chest tightness", correct: false },
      { text: "Headache", correct: false },
    ],
  },
  {
    question: "What is the preferred diagnostic imaging method for confirming a femoral hernia?",
    answers: [
      { text: "Ultrasound ", correct: true },
      { text: "MRI", correct: false },
      { text: "CT scan", correct: false },
      { text: "X-ray ", correct: false },
      { text: "PET scan", correct: false },
    ],
  },
  {
    question: "What is a common symptom experienced by individuals with a midline hernia?",
    answers: [
      { text: "Visible bulge near the navel ", correct: true },
      { text: "Leg weakness", correct: false },
      { text: "Back spasms", correct: false },
      { text: "Chest pain", correct: false },
      { text: "Tingling sensation in the fingers", correct: false },
    ],
  },
  {
    question: "Which type of midline hernia occurs when abdominal contents protrude through a weakened area in the abdominal wall near the navel?",
    answers: [
      { text: "Umbilical hernia ", correct: true },
      { text: "Ventral hernia", correct: false },
      { text: "Femoral hernia", correct: false },
      { text: "Hiatal hernia", correct: false },
      { text: "Inguinal hernia", correct: false },
    ],
  },
  {
    question: "What is the recommended treatment for midline hernias that cause symptoms or complications?",
    answers: [
      { text: "Physical therapy ", correct: true },
      { text: "Surgical repair", correct: false },
      { text: "Lifestyle modifications ", correct: false },
      { text: "Herbal remedies", correct: false },
      { text: "Antibiotic therapy", correct: false },
    ],
  },
  {
    question: "Which of the following activities might exacerbate symptoms of a midline hernia?",
    answers: [
      { text: "Heavy lifting  ", correct: true },
      { text: "Swimming", correct: false },
      { text: "Lying flat", correct: false },
      { text: "Resting", correct: false },
      { text: "Deep breathing", correct: false },
    ],
  },
  {
    question: "What is a common symptom experienced by individuals with a midline hernia?",
    answers: [
      { text: "Visible bulge near the navel ", correct: true },
      { text: "Leg weakness", correct: false },
      { text: "Back spasms", correct: false },
      { text: "Chest pain", correct: false },
      { text: "Tingling sensation in the fingers", correct: false },
    ],
  },
  {
    question: "Which type of midline hernia occurs when abdominal contents protrude through a weakened area in the abdominal wall near the navel?",
    answers: [
      { text: "Umbilical hernia ", correct: true },
      { text: "Ventral hernia", correct: false },
      { text: "Femoral hernia", correct: false },
      { text: "Hiatal hernia", correct: false },
      { text: "Inguinal hernia", correct: false },
    ],
  },
  {
    question: "What is the primary diagnostic method used for acute appendicitis?",
    answers: [
      { text: "Ultrasound ", correct: true },
      { text: "MRI", correct: false },
      { text: "X-ray", correct: false },
      { text: "Physical examination", correct: false },
      { text: "Blood test", correct: false },
    ],
  },
  {
    question: "Which age group is most commonly affected by acute appendicitis?",
    answers: [
      { text: "Adolescents and young adults ", correct: true },
      { text: "Children under 5", correct: false },
      { text: "Middle-aged adults", correct: false },
      { text: "Elderly individuals", correct: false },
      { text: "All age groups are equally affected", correct: false },
    ],
  },
  {
    question: "What is the most appropriate initial treatment for acute appendicitis?",
    answers: [
      { text: "Surgery (appendectomy) ", correct: true },
      { text: "Antibiotics only", correct: false },
      { text: "Pain medication only", correct: false },
      { text: "Observation without intervention", correct: false },
      { text: " Dietary changes", correct: false },
    ],
  },
  {
    question: "Which of the following imaging techniques is preferred for pregnant women suspected of having acute appendicitis?",
    answers: [
      { text: "Ultrasound  ", correct: true },
      { text: "MRI ", correct: false },
      { text: "CT scan", correct: false },
      { text: "X-ray", correct: false },
      { text: "PET scan", correct: false },
    ],
  },
  {
    question: "A 46-year-old man has a long history of heart- burn (GERD). His barium study shows an irregular, ulcerated area in the lower third of his esophagus. There is marked mucosal disruption and overhanging edges. What is the most likely diagnosis?",
    answers: [
      { text: "Adenocarcinoma arising in a Barrett's esophagus ", correct: true },
      { text: "Benign esophageal stricture", correct: false },
      { text: "Squamous carcinoma of the esophagus", correct: false },
      { text: "Paraoesophageal hernia", correct: false },
      { text: "Diaphragmatic hernia", correct: false },
    ],
  },
  {
    question: "A 33-year-old man is admitted to the hospital for evaluation and treatment of a gastrojejunal ulcer. At age 25, he was treated surgically with an omental (Graham) patch for a perforated duodenal ulcer. At age 30, he was treated with a truncal vagotomy and antrectomy for a chronic duodenal ulcer. He now has a stomal (gastrojejunal) ulcer that is refractory to medical therapy. Which of the following should be checked?",
    answers: [
      { text: "Gastrin level ", correct: true },
      { text: "Intrinsic factor", correct: false },
      { text: "Adrenaline", correct: false },
      { text: "Corstisol", correct: false },
      { text: "Insulin", correct: false },
    ],
  },
  {
    question: " A 42-year-old executive has refractory chronic duodenal ulcer disease. His physician has suggested several surgical options. The patient has chosen a parietal (highly selective) vagotomy instead of a truncal vagotomy and antrectomy because?",
    answers: [
      { text: "The complication rate is lower ", correct: true },
      { text: "It benefits patients with antral ulcers the most.", correct: false },
      { text: "It reduces acid secretion to a greater extent.", correct: false },
      { text: "It results in a lower incidence of ulcer recurrence.", correct: false },
      { text: "The complication rate is higher", correct: false },
    ],
  },
  {
    question: "What is the primary function of antacids in the management of ulcers?",
    answers: [
      { text: "Neutralizing stomach acid ", correct: true },
      { text: "Promoting mucus secretion", correct: false },
      { text: "Killing bacteria in the stomach", correct: false },
      { text: "Blocking histamine receptors", correct: false },
      { text: "All the above", correct: false },
    ],
  },
  {
    question: "What is the role of bismuth compounds in the treatment of peptic ulcers?**",
    answers: [
      { text: "Neutralizing stomach acid ", correct: true },
      { text: "Forming a protective coating over the ulcer", correct: false },
      { text: "Eradicating Helicobacter pylori", correct: false },
      { text: "Reducing acid production", correct: false },
      { text: "All the above", correct: false },
    ],
  },
  {
    question: "      Which of the following disorders involves simultaneous nonperistaltic contractions of the esophagus?",
    answers: [
      { text: "     Diffuse esophageal spasm (DES) ", correct: true },
      { text: "   Achalasia", correct: false },
      { text: "Hypertensive lower esophageal sphincter", correct: false },
      { text: " Nutcracker esophagus", correct: false },
      { text: "All the above", correct: false },
    ],
  },
  {
    question: "Young lady presents with progressive dysphagia to solid and liquid, weight loss. What is the most likely diagnosis?",
    answers: [
      { text: "       Achalasia ", correct: true },
      { text: " A tumor in the lower esophagus", correct: false },
      { text: "    GERD", correct: false },
      { text: "   Peptic ulcer disease", correct: false },
      { text: "Mallory-Weiss", correct: false },
    ],
  },
  {
    question: "    Which of the following is a common cause of traumatic oesophageal injury ?",
    answers: [
      { text: "   Swallowing a corrosive substance ", correct: true },
      { text: "    Gastroesophageal reflux disease(GERD)", correct: false },
      { text: "Chronic alcohol consumption", correct: false },
      { text: " Viral infection ", correct: false },
      { text: "All the above", correct: false },
    ],
  },
  {
    question: "What is a common symptom of oesophageal perforation resulting from injury ?",
    answers: [
      { text: "Chest pain", correct: true },
      { text: "  Visual disturbances", correct: false },
      { text: "     Lower back pain", correct: false },
      { text: "     Joint swelling", correct: false },
      { text: "All the above", correct: false },
    ],
  },
  {
    question: "What diagnostic method is used to confirm the diagnosis of acute cholecystitis?",
    answers: [
      { text: "Ultrasound of the abdominal cavity ", correct: true },
      { text: "ECG", correct: false },
      { text: "X-ray of the lungs", correct: false },
      { text: "Laboratory urine test", correct: false },
      { text: "Gastroenteroscopy", correct: false },
    ],
  },
  {
    question: "What symptoms are characteristic of acute cholecystitis?",
    answers: [
      { text: "Pain in the right upper quadrant of the abdomen, nausea, vomiting", correct: true },
      { text: " Heaviness in the chest, shortness of breath", correct: false },
      { text: "Headache, dizziness", correct: false },
      { text: "Swelling in the legs, high blood pressure", correct: false },
      { text: "Back pain, frequent urination", correct: false },
    ],
  },
  {
    question: "What organs can be affected by complications of acute cholecystitis?",
    answers: [
      { text: "Pancreas and intestines ", correct: true },
      { text: "Stomach and intestines", correct: false },
      { text: "Liver and spleen", correct: false },
      { text: "Lungs and kidneys", correct: false },
      { text: "Heart and lungs", correct: false },
    ],
  },
  {
    question: "What measures are taken in case of exacerbation of acute cholecystitis?",
    answers: [
      { text: "Surgical removal of the gallbladder (cholecystectomy) ", correct: true },
      { text: "Prescription of anti-inflammatory drugs", correct: false },
      { text: "Inhalations and physiotherapy", correct: false },
      { text: "Diet limited to fatty foods", correct: false },
      { text: "Taking vitamins", correct: false },
    ],
  },
  {
    question: "What treatment measures are recommended for acute pancreatitis?",
    answers: [
      { text: "All of the above ", correct: true },
      { text: "Use of antibiotics", correct: false },
      { text: "Surgery to remove diseased tissue", correct: false },
      { text: "Use of anti-inflammatory drugs", correct: false },
      { text: "Fasting and rest", correct: false },
    ],
  },
  {
    question: "Which diagnostic method helps confirm the diagnosis of acute pancreatitis?",
    answers: [
      { text: "Ultrasound of the abdominal cavity ", correct: true },
      { text: "ECG", correct: false },
      { text: "Laboratory urine test", correct: false },
      { text: "X-ray of the stomach", correct: false },
      { text: "Tomography of the head", correct: false },
    ],
  },
  {
    question: "What organs can be affected during long-term acute pancreatitis?",
    answers: [
      { text: "Intestines and abdominal cavity ", correct: true },
      { text: "Liver and lungs", correct: false },
      { text: "Heart and kidneys", correct: false },
      { text: "Stomach and esophagus", correct: false },
      { text: "Spleen and pancreas", correct: false },
    ],
  },
  {
    question: "What are the main symptoms associated with acute pancreatitis?",
    answers: [
      { text: "Abdominal pain, vomiting, elevated blood amylase levels ", correct: true },
      { text: "Headache and weakness", correct: false },
      { text: "Insomnia and nervousness", correct: false },
      { text: "Swelling and high blood pressure", correct: false },
      { text: "Shortness of breath and cough", correct: false },
    ],
  },
  {
    question: "What is the main symptom of liver abscess?",
    answers: [
      { text: "Abdominal pain ", correct: true },
      { text: "Jaundice", correct: false },
      { text: "Skin rash", correct: false },
      { text: "Changes in vision", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How are hepatic hydatid cysts usually treated?",
    answers: [
      { text: "Surgical removal", correct: true },
      { text: "Antibiotic therapy", correct: false },
      { text: "Antifungal drugs", correct: false },
      { text: "Chemotherapy", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a complication of portal hypertension?",
    answers: [
      { text: "Hypertension ", correct: true },
      { text: "Bleeding from varicose veins", correct: false },
      { text: "Hypoglycemia", correct: false },
      { text: "Respiratory failure", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "How is portal hypertension diagnosed?",
    answers: [
      { text: "Imaging tests such as ultrasound or computed tomography ", correct: true },
      { text: "Blood test", correct: false },
      { text: "Electrocardiogram", correct: false },
      { text: "Bone marrow biopsy", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "What additional examination methods can help confirm the diagnosis of splenic cyst?",
    answers: [
      { text: "Ultrasound (ultrasound examination)", correct: true },
      { text: "CT (computed tomography)", correct: false },
      { text: "MRI (magnetic resonance imaging)", correct: false },
      { text: "Radiography", correct: false },
      { text: "Endoscopy", correct: false },
    ],
  },
  {
    question: "Which of the following situations most often results in splenic injury?",
    answers: [
      { text: "Collision in contact sports ", correct: true },
      { text: "Fall from height", correct: false },
      { text: "Car accident", correct: false },
      { text: "Knife wound", correct: false },
      { text: "Surgical intervention", correct: false },
    ],
  },
  {
    question: "What complications can arise from intestinal obstruction?",
    answers: [
      { text: "Peritonitis ", correct: true },
      { text: "Urolithiasis", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "Parkinson's disease", correct: false },
      { text: "Cataract", correct: false },
    ],
  },
  {
    question: "Which of the following factors may increase the risk of developing intestinal obstruction?",
    answers: [
      { text: "Surgical interventions on the intestines ", correct: true },
      { text: "Normal digestive process", correct: false },
      { text: "Moderate exercise", correct: false },
      { text: "Regular consumption of vegetables and fruits", correct: false },
      { text: "Consumption of high fiber foods", correct: false },
    ],
  },
  {
    question: "What types of intestinal obstruction are there?",
    answers: [
      { text: "Acute and chronic", correct: true },
      { text: "Primary and secondary", correct: false },
      { text: "Proctogenic and analog", correct: false },
      { text: "Symptomatic and asymptomatic", correct: false },
      { text: "Congenital and acquired", correct: false },
    ],
  },
  {
    question: "Which of the following signs are typical for acute intestinal obstruction?",
    answers: [
      { text: "Vomiting and failure to pass gas and stool ", correct: true },
      { text: "Frequent diarrhea", correct: false },
      { text: "Constant abdominal pain", correct: false },
      { text: "No bloating", correct: false },
      { text: "Gradual loss of appetite", correct: false },
    ],
  },
  {
    question: "What surgical procedure is most often used to treat mechanical intestinal obstruction?",
    answers: [
      { text: "Bowel resection ", correct: true },
      { text: "Colostomy", correct: false },
      { text: "Appendectomy", correct: false },
      { text: "Removal of the spleen", correct: false },
      { text: "Intestinal valve replacement", correct: false },
    ],
  },
  {
    question: "What are the causes of mechanical intestinal obstruction?",
    answers: [
      { text: "Congenital anomalies ", correct: true },
      { text: "Poisoning", correct: false },
      { text: "Inflammation", correct: false },
      { text: "Anemia", correct: false },
      { text: "Diabetes mellitus", correct: false },
    ],
  },
  {
    question: "What symptoms are characteristic of dynamic intestinal obstruction?",
    answers: [
      { text: "Vomiting ", correct: true },
      { text: "Shortness of breath", correct: false },
      { text: "Insomnia", correct: false },
      { text: "Itchy skin", correct: false },
      { text: "Constipation", correct: false },
    ],
  },
  {
    question: "What diagnostic methods are used to identify dynamic intestinal obstruction?",
    answers: [
      { text: "X-ray ", correct: true },
      { text: "CT scan", correct: false },
      { text: "Electrocardiography", correct: false },
      { text: "Ultrasound of the abdominal organs", correct: false },
      { text: "Blood test for cholesterol levels", correct: false },
    ],
  },
  {
    question: "What complications can occur with strangulated intestinal obstruction?",
    answers: [
      { text: "Peritonitis ", correct: true },
      { text: "Pneumonia", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Arthritis", correct: false },
      { text: "Cholecystitis", correct: false },
    ],
  },
  {
    question: "Which of the following factors may increase the risk of developing strangulated ileus?",
    answers: [
      { text: "Transfer of abdominal surgeries ", correct: true },
      { text: "Regular exercise", correct: false },
      { text: "Presence of regular bowel movements", correct: false },
      { text: "Proper nutrition", correct: false },
      { text: "Constant use of vitamins", correct: false },
    ],
  },
  {
    question: "What complications can occur with peritonitis?",
    answers: [
      { text: "Sepsis Diabetes mellitus", correct: true },
      { text: "Pyelonephritis", correct: false },
      { text: "Sepsis", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Parkinson's disease", correct: false },
    ],
  },
  {
    question: "Which of the following factors may increase the risk of developing peritonitis?",
    answers: [
      { text: "Taking antibiotics ", correct: true },
      { text: "Regular exercise", correct: false },
      { text: "Presence of regular bowel movements", correct: false },
      { text: "Proper nutrition", correct: false },
      { text: "Heredity", correct: false },
    ],
  },
  {
    question: "What signs indicate possible intra-abdominal bleeding with peritonitis?",
    answers: [
      { text: "Pale skin and mucous membranes", correct: true },
      { text: "Increased body temperature", correct: false },
      { text: "Increased heart rate", correct: false },
      { text: "Change in hair color", correct: false },
      { text: "Increased appetite", correct: false },
    ],
  },
  {
    question: "What organs can be affected by complications of peritonitis?",
    answers: [
      { text: "Intestines and abdominal cavity ", correct: true },
      { text: "Liver and kidneys", correct: false },
      { text: "Stomach and esophagus", correct: false },
      { text: "Heart and lungs", correct: false },
      { text: "Spleen and pancreas", correct: false },
    ],
  },
  {
    question: "What complications can occur with Hirschsprung's disease?",
    answers: [
      { text: "All of the above ", correct: true },
      { text: "Pyelonephritis", correct: false },
      { text: "Sepsis", correct: false },
      { text: "Arthritis", correct: false },
      { text: "Pneumonia", correct: false },
    ],
  },
  {
    question: "What is dolichocolon?",
    answers: [
      { text: "Increase in the length of the colon ", correct: true },
      { text: "Increase in stomach size", correct: false },
      { text: "Liver dysfunction", correct: false },
      { text: "Reduction in the size of the small intestine", correct: false },
      { text: "Renal dysfunction", correct: false },
    ],
  },
  {
    question: "What are the main symptoms of dolichocolon?",
    answers: [
      { text: "Constipation and gas formation ", correct: true },
      { text: "Increased urinary function", correct: false },
      { text: "Diarrhea and vomiting", correct: false },
      { text: "Swelling and pain in the joints", correct: false },
      { text: "Stress and nervousness", correct: false },
    ],
  },
  {
    question: "What diagnostic method is most often used to detect dolichocolon?",
    answers: [
      { text: "X-ray examination ", correct: true },
      { text: "Ultrasound of the abdominal cavity", correct: false },
      { text: "CT scan of the abdomen", correct: false },
      { text: "Endoscopy", correct: false },
      { text: "Laboratory blood test", correct: false },
    ],
  },
  {
    question: "What is a potential complication of chronic ulcerative colitis?",
    answers: [
      { text: "Intestinal obstruction ", correct: true },
      { text: "Blindness", correct: false },
      { text: "Kidney stones", correct: false },
      { text: "Liver failure", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How is chronic ulcerative colitis usually treated?",
    answers: [
      { text: "immunosuppressants ", correct: true },
      { text: "antibiotics", correct: false },
      { text: "chemotherapy", correct: false },
      { text: "physiotherapy", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "What is a common complication of untreated hemorrhoids?",
    answers: [
      { text: "fistulas ", correct: true },
      { text: "ulcers", correct: false },
      { text: "abscesses", correct: false },
      { text: "all of the above", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a common symptom of hemorrhoids?",
    answers: [
      { text: "Rectal bleeding", correct: true },
      { text: "Joint pain", correct: false },
      { text: " Fever", correct: false },
      { text: "Headache", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What diagnostic method is usually used to confirm the presence of a chronic anal abscess?",
    answers: [
      { text: "Proctosigmoidoscopy ", correct: true },
      { text: "X-ray examination of the spine", correct: false },
      { text: "Colonoscopy", correct: false },
      { text: "Ultrasound of the abdominal cavity", correct: false },
      { text: "Electrocardiogram", correct: false },
    ],
  },
  {
    question: "What symptoms usually accompany a chronic anal abscess?",
    answers: [
      { text: "Pain and discomfort in the anal area, discharge of pus ", correct: true },
      { text: "Sleep disturbance", correct: false },
      { text: "Increased appetite", correct: false },
      { text: "Acute abdominal pain", correct: false },
      { text: "Pressure increase", correct: false },
    ],
  },
  {
    question: "What are the possible complications of colon diverticula?",
    answers: [
      { text: "Damage to the intestinal wall with the formation of peritonitis ", correct: true },
      { text: "Bowel cancer", correct: false },
      { text: "Inflammation of the gastrointestinal tract", correct: false },
      { text: "Hypertensive crisis", correct: false },
      { text: "Allergic reaction to contrast agent", correct: false },
    ],
  },
  {
    question: "What is rectal prolapse?",
    answers: [
      { text: "Prolapse of the rectum from the anus", correct: true },
      { text: "Sigmoid colon prolapse", correct: false },
      { text: " Gallbladder prolapse ", correct: false },
      { text: "Formation of ulcers in the stomach", correct: false },
      { text: "Structure of the small intestine", correct: false },
    ],
  },
  {
    question: "Which of the following statement is incorrect about thyroid hormones?",
    answers: [
      { text: "Controls blood phosphate level ", correct: true },
      { text: "Maintains water and electrolyte balance", correct: false },
      { text: "Supports erythropoiesis", correct: false },
      { text: "Regulates BMR", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following statement is true about complications of a large goiter?",
    answers: [
      { text: "Dysphagia is an indication for surgery", correct: true },
      { text: "Causes stridor due to compression of the oesophagus", correct: false },
      { text: "Causes hoarseness due to compression of the trachea", correct: false },
      { text: "Causes more florid thyrotoxicosis than a smaller goiter", correct: false },
      { text: "Causes \"Derbyshire neck\"", correct: false },
    ],
  },
  {
    question: "Which is not a function of thyroid hormone?",
    answers: [
      { text: "regulates the diurnal rhythm ", correct: true },
      { text: "controls metabolism of carbohydrates, proteins and fats", correct: false },
      { text: "maintains water balance", correct: false },
      { text: "maintains electrolyte balance", correct: false },
      { text: "regulation of basal metabolic rate", correct: false },
    ],
  },
  {
    question: "The thyroid hormones increase the basal metabolic rate. Under which of the following criteria, the function of thyroxine can be classified?",
    answers: [
      { text: "metabolic ", correct: true },
      { text: "cardiovascular", correct: false },
      { text: "circulatory", correct: false },
      { text: "excretive", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "The pathogenesis of primary hypothyroidism is due to:",
    answers: [
      { text: "A decrease in the mass of glandular tissue of the thyroid gland with inhibition of the synthesis of thyroid hormones", correct: true },
      { text: "A decrease in TSH secretion", correct: false },
      { text: "A decrease in the synthesis of thyroliberin", correct: false },
      { text: "An increase in the mass of glandular tissue of the thyroid gland", correct: false },
      { text: "A decrease in the secretion of thyroliberin", correct: false },
    ],
  },
  {
    question: "Primary hypothyroidism can develop as a result of all of the above, except:",
    answers: [
      { text: "Peripheral resistance to thyroid hormones ", correct: true },
      { text: "Blocking the flow of iodine into the thyroid gland", correct: false },
      { text: "A defect in the conversion of monoiodotyrosine and diiodotyrosine to triiodothyronine and thyroxine", correct: false },
      { text: "Excess intake of iodine in the thyroid gland", correct: false },
      { text: "Blocking the absorption of iodine in the gastrointestinal tract", correct: false },
    ],
  },
  {
    question: "What hormone does the parathyroid gland produce?",
    answers: [
      { text: "PTH ", correct: true },
      { text: "calcitonin", correct: false },
      { text: "PFH", correct: false },
      { text: "insulin", correct: false },
      { text: "glycogen", correct: false },
    ],
  },
  {
    question: "What are the types of cells found in parathyroid gland?",
    answers: [
      { text: "chief cells and oxyphil ", correct: true },
      { text: "beta cells", correct: false },
      { text: "alpha cells", correct: false },
      { text: "parafollicular cells", correct: false },
      { text: "pituicytes", correct: false },
    ],
  },
  {
    question: "What charaterizes the adrenal gland?",
    answers: [
      { text: "the zona glomerulosa produces aldosterone ", correct: true },
      { text: "the adrenal cortex produces steroids ", correct: false },
      { text: "adrenal androgen production is controlled by gonadotrophins", correct: false },
      { text: "cortisol production is controlled by angiotensin", correct: false },
      { text: "the adrenal cortex produces catecholamines", correct: false },
    ],
  },
  {
    question: "Which of the following statements is NOT true?",
    answers: [
      { text: "the adrenal medulla and the adrenal cortex function independetly from each other ", correct: true },
      { text: "Cushing's syndrome is due to overproduction of glucocorticoids", correct: false },
      { text: "the adrenal medulla is functionally part of the sympathetic nervous system", correct: false },
      { text: "the chromaffin cells of the adrenal medulla manufacture", correct: false },
      { text: "the chromaffin cells of the adrenal medulla secrete adrenaline and noradrenaline", correct: false },
    ],
  },
  {
    question: "What is the most characteristic for cancer of the body of the pancreas? ",
    answers: [
      { text: "Temperature rise  ", correct: true },
      { text: "Epigastric pain ", correct: false },
      { text: "Jaundice", correct: false },
      { text: "Nausea and vomiting ", correct: false },
      { text: "Vascular thrombosis", correct: false },
    ],
  },
  {
    question: "What kind of jaundice is a characteristic of pancreatic head cancer?",
    answers: [
      { text: "Permanent, intense, rapidly growing ", correct: true },
      { text: "Constant, low-intensity, not increasing", correct: false },
      { text: "Periodically increasing and decreasing", correct: false },
      { text: "All options are possible", correct: false },
      { text: "No correct answer", correct: false },
    ],
  },
  {
    question: "What is the definition of a hemothorax?",
    answers: [
      { text: "A medical condition where blood pools between the chest wall and lung", correct: true },
      { text: "A medical procedure in which blood is drained from the heart", correct: false },
      { text: "A medical diagnosis of extremely low blood pressure", correct: false },
      { text: "A communicable disease that leads to irregular breathing patterns", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How is a hemothorax diagnosed?",
    answers: [
      { text: "with both an X-ray and a CT scan ", correct: true },
      { text: "with a CT scan", correct: false },
      { text: "with an X-ray", correct: false },
      { text: "Neither an X-ray or a CT scan", correct: false },
      { text: "MRI", correct: false },
    ],
  },
  {
    question: "A 50-year-old who fell from 3 meters. Which of the following best accounts for the increased density of the left hemithorax?",
    answers: [
      { text: "hemothorax", correct: true },
      { text: "diaphragmatic rupture", correct: false },
      { text: "lung collapse", correct: false },
      { text: "patient rotation", correct: false },
      { text: "pulmonary contusion", correct: false },
    ],
  },
  {
    question: "What is seen in the right upper zone in this 90-year-old patient who has a past medical history remarkable for tuberculosis that was treated over 70 years ago?",
    answers: [
      { text: "oleothorax ", correct: true },
      { text: "empyema", correct: false },
      { text: "mesothelioma", correct: false },
      { text: "calcified hemothorax", correct: false },
      { text: "pleural plaque", correct: false },
    ],
  },
  {
    question: "What is the main feature of X-ray syndrome of consolidation of pulmonary tissue?",
    answers: [
      { text: "A decrease in transparency (shading) of a share or segment", correct: true },
      { text: "A picture of atelectasis", correct: false },
      { text: "Increased (transparency) the proportion of the segment", correct: false },
      { text: "\"amputation of the bronchial tubes\"", correct: false },
      { text: "\"tram lines\"", correct: false },
    ],
  },
  {
    question: "During the early stages of a lung abscess, the pathological process is the same as that of:",
    answers: [
      { text: "Pneumonia ", correct: true },
      { text: "Bronchopulmonary dysplasia", correct: false },
      { text: "Pulmonary edema", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
      { text: "Tuberculosis", correct: false },
    ],
  },
  {
    question: "In approximately 50% of patients, the cause of bronchiectasis is:",
    answers: [
      { text: "Unknown", correct: true },
      { text: "Pneumonia", correct: false },
      { text: "Inhalation of a peanut", correct: false },
      { text: "All of these", correct: false },
      { text: "Inherited condition", correct: false },
    ],
  },
  {
    question: "What is the best test to diagnose bronchiectasis?",
    answers: [
      { text: "CT scan", correct: true },
      { text: "Mucus culture", correct: false },
      { text: "Lung function tests", correct: false },
      { text: "Chest X-ray", correct: false },
      { text: "MRI", correct: false },
    ],
  },
  {
    question: "How is pleurisy described?",
    answers: [
      { text: "is made worse by deep inspiration i", correct: true },
      { text: "is due to inflammation of the pleura", correct: false },
      { text: "s a common term used for all diseases of the pleura", correct: false },
      { text: "is not present in pneumothorax", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How is the fluid between the parietal and visceral pleurae presented?",
    answers: [
      { text: "is formed by net filtration of a transudative fluid ", correct: true },
      { text: "is primarily drained by the visceral lymphatics", correct: false },
      { text: "is normally protein rich", correct: false },
      { text: "has a volume of >300 ml", correct: false },
      { text: "has a volume of <100 ml", correct: false },
    ],
  },
  {
    question: "A 30-year-old patient has a CT thorax which shows an anterior mediastinal mass with a fat-fluid level. Which is most likely?",
    answers: [
      { text: "benign teratoma", correct: true },
      { text: "lipoma", correct: false },
      { text: "liposarcoma", correct: false },
      { text: "thymolipoma", correct: false },
      { text: "thymoma", correct: false },
    ],
  },
  {
    question: "A 25-year-old male presents with a 2-week history of acute breathlessness and chest pain. CT thorax with contrast shows a hetergeneous anterior mediastinal mass and multiple lung nodules. Which is the next best step for diagnosis?",
    answers: [
      { text: "Alpha-fetoprotein and beta HCG levels", correct: true },
      { text: "bone marrow biopsy", correct: false },
      { text: "bronchoscopy", correct: false },
      { text: "CT guided biopsy of anterior mediastinal mass", correct: false },
      { text: "CT guided biopsy of lung nodule", correct: false },
    ],
  },
  {
    question: "Which of the following risk factors for atherosclerosis cannot be modified?",
    answers: [
      { text: "a family history of early atherosclerosis", correct: true },
      { text: " a diet low in fruits and vegetables", correct: false },
      { text: "tobacco use", correct: false },
      { text: "high blood pressure", correct: false },
      { text: "low blood pressure", correct: false },
    ],
  },
  {
    question: "Which of the following are an effect of tobacco use on risk of atherosclerosis?",
    answers: [
      { text: "further constriction of the arteries ", correct: true },
      { text: "increased levels of HDL cholesterol", correct: false },
      { text: "No effect", correct: false },
      { text: "increased blood oxygen levels", correct: false },
      { text: "decreases LDL cholesterol", correct: false },
    ],
  },
  {
    question: "A 56-year-old man reports reduced exercise tolerance over the past 5 years. In the past year he has noted chest pain after ascending a flight of stairs. He smokes 2 packs of cigarettes per day. On examination he has a blood pressure of 155/95 mm Hg. His body mass index is 30 kg/m2. Lab findings include a total serum cholesterol of 245 mg/dL with HDL cholesterol of 22 mg/dL. Which of the following vascular abnormalities is he most likely to have? ",
    answers: [
      { text: "atherosclerosis ", correct: true },
      { text: "lymphedema", correct: false },
      { text: "medial calcific sclerosis", correct: false },
      { text: "hyperplastic arteriosclerosis", correct: false },
      { text: "deep venous thrombosis", correct: false },
    ],
  },
  {
    question: "A 54-year-old previously healthy woman is hospitalized for pneumonia. On the 10th hospital day she is found to have swelling and tenderness of her right leg, which has developed over the past 48 hours. Raising the leg is elicits pain. An ultrasound examination reveals findings suggestive of femoral vein thrombosis. Which of the following conditions is most likely to have contributed the most to the appearance of these findings?",
    answers: [
      { text: "Immobilization ", correct: true },
      { text: "Protein C deficiency", correct: false },
      { text: "Trousseau syndrome", correct: false },
      { text: "Pregnancy", correct: false },
      { text: "Hypertension", correct: false },
    ],
  },
  {
    question: "What is the duration of heparin therapy in deep vein thrombosis?",
    answers: [
      { text: "7-10 days", correct: true },
      { text: "15-20 days", correct: false },
      { text: "3-4 days", correct: false },
      { text: "1 month", correct: false },
      { text: "1 year", correct: false },
    ],
  },
  {
    question: "A patient has been diagnosed with thromboangiitis obliterans. The nurse is identifying measures to help the patient cope with lifestyle changes needed to control the disease process. The nurse plans to refer to the patient with a:",
    answers: [
      { text: "smoking cessation propram", correct: true },
      { text: "pain management clinic", correct: false },
      { text: "dititian", correct: false },
      { text: "medical social worker", correct: false },
      { text: "hospitalization", correct: false },
    ],
  },
  {
    question: "What can be included for the signs and symptoms of deep vein thrombosis?",
    answers: [
      { text: "redness, warmth, tenderness, swelling", correct: true },
      { text: "shourtness of breath, chest pain, coughing blood", correct: false },
      { text: "muscle spasms, ", correct: false },
      { text: "vertigo, ringing ears", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What can be included for the signs and symptoms of pulmonary embolism?",
    answers: [
      { text: "shourtness of breath, chest pain, coughing blood ", correct: true },
      { text: "redness, warmth, tenderness, swelling", correct: false },
      { text: "muscle spasms, ", correct: false },
      { text: "vertigo, ringing ears", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman comes to the office for routine health evaluation. She has no complaints, and her medical history is unremarkable. On physical examination, several varicose veins are noted on the popliteal fossa on the right. They are not tender to palpation, but thin venous bullae are noted. Which of the following possible complications of this condition?",
    answers: [
      { text: "rupture and bleeding ", correct: true },
      { text: "pigmentation and eczema", correct: false },
      { text: "stasis dermatitis", correct: false },
      { text: "venous stasis ulcers", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following treatments for varicose veins is most likely to prevent new varicose veins from developing?",
    answers: [
      { text: "No treatment is known to prevent the development of new varicose veins", correct: true },
      { text: "surgery to strip the saphenous veins", correct: false },
      { text: "thermal ablation", correct: false },
      { text: "Lifestyle changes", correct: false },
      { text: "sclerotherapy", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
