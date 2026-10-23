// Descriptions reviewed against the current placeholder images. Update when replacing assets.
const descriptions: Record<string, [string, string]> = {
 'graffiti-face': ['Kolorowy mural przedstawiający twarz z dużymi oczami.', 'Colourful mural of a face with large eyes.'],
 'flowers-painting': ['Obraz bukietu czerwonych i białych kwiatów na ciemnym tle.', 'Painting of red and white flowers against a dark background.'],
 'watercolor-flowers': ['Akwarelowe różowe kwiaty i fragment kwiecistego wzoru.', 'Pink watercolour flowers and a section of floral pattern.'],
 'varoom-magazine': ['Pomarańczowy magazyn Varoom na biurku obok komputera.', 'Orange Varoom magazine on a desk beside a computer.'],
 'palm-digital': ['Rysowanie palmy rysikiem na ekranie tabletu.', 'Drawing a palm tree with a stylus on a tablet.'],
 'cat-illustration': ['Tablet wyświetlający portret pręgowanego kota.', 'Tablet displaying a portrait of a tabby cat.'],
 'bird-illustration': ['Ilustracja ciemnego ptaka na jasnym tle.', 'Illustration of a dark bird against a pale background.'],
 'golden-jewelry': ['Rysunek ozdób i zawieszek ułożonych na jasnym tle.', 'Drawing of ornaments and pendants arranged on a pale background.'],
 'deer-forest': ['Jeleń w ciemnym lesie rozświetlonym pomarańczowym światłem.', 'Deer in a dark forest illuminated by orange light.'],
 'holographic-bust': ['Klasyczne popiersie w neonowych odcieniach niebieskiego i różu.', 'Classical bust in neon blue and pink tones.'],
 'echo-1': ['Abstrakcyjne malarstwo z niebieskimi, pomarańczowymi i zielonymi plamami.', 'Abstract painting with blue, orange and green patches.'],
 'echo-2': ['Abstrakcyjna kompozycja czerwonych i niebieskich kształtów z żółtym tłem.', 'Abstract red and blue shapes against a yellow background.'],
 'echo-3': ['Abstrakcyjne szerokie pociągnięcia pędzla w różu, błękicie i żółci.', 'Abstract broad brushstrokes in pink, blue and yellow.'],
 'echo-4': ['Abstrakcyjna kompozycja fioletu, żółci i pomarańczu.', 'Abstract composition in purple, yellow and orange.'],
 'forma-1': ['Rozmyte światła w odcieniach błękitu i fioletu.', 'Blurred lights in blue and purple tones.'],
 'forma-2': ['Profil twarzy pokrytej złotymi i ciemnymi fakturami.', 'Face in profile covered in gold and dark textures.'],
 'forma-3': ['Postać pośród zielonych i pomarańczowych smug światła.', 'Figure among green and orange streaks of light.'],
 'forma-4': ['Postać pod tunelem pomarańczowych świateł.', 'Figure under a tunnel of orange lights.'],
};
export function imageDescription(src: string, language: string, fallback: string) {
 const key = Object.keys(descriptions).find(key => src.includes(key));
 return key ? descriptions[key][language === 'pl' ? 0 : 1] : fallback;
}
