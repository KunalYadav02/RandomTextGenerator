
const subjects = [
    'community', 'definition', 'safety', 'quality',
    'development', 'language', 'management', 'player',
    'variety', 'video', 'week', 'security',
    'country', 'exam', 'movie', 'organization',
    'equipment', 'physics', 'analysis', 'policy',
    'series', 'thought', 'basis', 'boyfriend',
    'direction', 'strategy', 'technology', 'army',
    'camera', 'freedom', 'paper', 'environment',
    'child', 'instance', 'month', 'truth',
    'marketing', 'university', 'writing', 'article',
    'department', 'difference', 'goal', 'news',
    'audience', 'fishing', 'growth', 'income',
    'marriage', 'user', 'combination', 'failure',
    'meaning', 'medicine', 'philosophy', 'teacher',
    'communication', 'night', 'chemistry', 'disease',
    'disk', 'energy', 'nation', 'road',
    'role', 'soup', 'advertising', 'location',
    'success', 'addition', 'apartment', 'education',
    'math', 'moment', 'painting', 'politics',
    'attention', 'decision', 'event', 'property',
    'shopping', 'student', 'wood', 'competition',
    'distribution', 'entertainment', 'office', 'population',
    'president', 'unit', 'category', 'cigarette',
    'context', 'introduction', 'opportunity', 'performance',
    'driver', "coffee", "dog", "cat", "ice cream", "laptop", "music", "cricket", "football", "tv"],
    adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", 'Happy', 'depressed',
        'hardworking', 'successful',
        'skilled', 'sloppy',
        'green', 'tampered',
        'dilapidated', 'fixed',
        'healthy',],
    verbs = [
        'was', 'had', 'did', 'would', 'could',
        'knew', 'saw', 'might', 'got', 'thought',
        'went', 'made', 'took', 'came', 'said',
        'put', 'wanted', 'gave', 'looked', 'found',
        'needed', 'liked', 'set', 'used', 'became',
        'told', 'kept', 'helped', 'worked', 'let',
        'felt', 'provided', 'believed', 'tried', 'should',
        'asked', 'remembered', 'left', 'showed', 'paid',
        'ran', 'read', 'seemed', 'included', 'brought',
        'understood', 'started', 'played', 'cut', 'lived',
        'met', 'moved', 'heard', 'called', 'stopped',
        'turned', 'talked', 'bought', 'thanked', 'changed',
        'continued', 'considered', 'allowed', 'hoped', 'produced',
        'stayed', 'appeared', 'wrote', 'held', 'expected',
        'ensured', 'supposed', 'wished', 'carried', 'followed',
        'offered', 'supported', 'accepted', 'spoke', 'leaded',
        'remained', 'stood', 'suggested', 'hit', 'developed',
        'happened', 'sat', 'won', 'loved', 'added',
        'learned', 'created', 'agreed', 'applied', 'waited',
        'avoided', 'sent', 'formed', 'explained', 'returned',],
    cord_conjuctions = ["and", "but", "or", "nor", "for", "yet", "so"],
    sub_conjuctions = [
        'after', 'although',
        'as', 'because',
        'before', 'how',
        'if', 'once',
        'since', 'than',
        'that', 'though',
        'till', 'until',
        'when', 'where',
        'whether', 'while'
    ],
    pronouns = [
        'I', 'he', 'him',
        'you', 'we', 'him',
        'her', 'yours', 'theirs',
        'someone', 'where', 'when',
        'yourselves', 'themselves', 'oneself',
        'is', 'hers', 'when',
        'whom', 'whose', 'each other',
        'one another', 'everyone', 'nobody',
        'none', 'each', 'anywhere',
        'anyone', 'nothing'
    ]


const randomNumberBetween = (range: number) => Math.floor(Math.random() * range)


const useConjuction = () => Math.random() < 0.5

const generateLine = () => `${adjectives[randomNumberBetween(adjectives.length)]} ${subjects[randomNumberBetween(subjects.length)]} ${verbs[randomNumberBetween(verbs.length)]} ${subjects[randomNumberBetween(subjects.length)]} ${useConjuction() ? cord_conjuctions[randomNumberBetween(cord_conjuctions.length)] : ""} ${subjects[randomNumberBetween(subjects.length)]} ${sub_conjuctions[randomNumberBetween(sub_conjuctions.length)]} ${pronouns[randomNumberBetween(pronouns.length)]} ${verbs[randomNumberBetween(verbs.length)]} ${subjects[randomNumberBetween(subjects.length)]} ${useConjuction() ? cord_conjuctions[randomNumberBetween(cord_conjuctions.length)] : ""} ${subjects[randomNumberBetween(subjects.length)]}. `



const genPara = (numOfLines = 1) => {
    let para = ""
    for (let i = 0; i < numOfLines; i++) {
        para += generateLine()

    }
    return para
}



const randomParagraph = (numLines = 1) => genPara(numLines)


export default randomParagraph