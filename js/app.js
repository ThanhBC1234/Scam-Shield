"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const en = {
  "nav.analyze": "Analyze",
  "nav.types": "Scam types",
  "nav.learn": "Learn",
  "nav.history": "History",
  "controls.family": "Large text",
  "hero.eyebrow": "Local analysis • No automatic upload",
  "hero.titleLine1": "Pause for a moment.",
  "hero.titleLine2": "Check before you act.",
  "hero.lead": "Check suspicious messages, calls, images, videos, files and phone numbers. See the warning signs and what to do next.",
  "hero.cta": "Analyze now",
  "hero.demo": "Try a demo scenario",
  "trust.private": "Private",
  "trust.explainable": "Explainable",
  "trust.actionable": "Actionable",
  "visual.local": "On-device processing",
  "visual.noUpload": "No automatic upload",
  "visual.complete": "Analysis complete",
  "visual.highRisk": "67% SCAM LIKELIHOOD",
  "visual.bankScam": "Possible bank impersonation • verify first",
  "visual.nextStep": "Your next safe step",
  "visual.callOfficial": "Call the official hotline",
  "flag.urgency": "Urgency",
  "flag.credential": "OTP / Password",
  "flag.fear": "Threat",
  "ribbon.label": "CHECK",
  "tab.text": "Text",
  "tab.voice": "Voice",
  "tab.image": "Image",
  "tab.video": "Video",
  "tab.file": "File",
  "tab.phone": "Phone",
  "analyzer.kicker": "RISK CHECK",
  "analyzer.title": "What would you like to check?",
  "analyzer.subtitle": "Choose a content type below. Your data is processed in this browser.",
  "text.title": "Enter content to check",
  "text.help": "Paste a message, email or conversation.",
  "common.clear": "Clear",
  "text.detectAuto": "Auto-detect language",
  "text.samples": "DEMO SCENARIOS",
  "sample.bank": "Bank + OTP",
  "sample.authority": "Fake police",
  "sample.scholarship": "Fake scholarship",
  "voice.title": "Describe the call",
  "voice.help": "Record up to 60 seconds or type the important details.",
  "voice.ready": "Ready to record",
  "voice.dictate": "Turn speech into text",
  "voice.transcript": "Call transcript",
  "voice.privacy": "The recording only exists in browser memory.",
  "image.title": "Upload a screenshot",
  "image.help": "PNG, JPG or WEBP, up to 8 MB.",
  "upload.dropImage": "Drop an image here or choose from device",
  "upload.local": "The file is not automatically sent to a server",
  "image.runOcr": "Extract text (OCR)",
  "image.transcript": "Text found in the image",
  "video.title": "Check a short video",
  "video.help": "MP4/WebM, up to 30 MB and 60 seconds.",
  "video.frameLimit": "≤ 6 FRAMES",
  "upload.dropVideo": "Choose a video to inspect",
  "video.limit": "Samples a few frames; does not detect fake videos",
  "video.frames": "Extract frames",
  "video.transcript": "Visible text / spoken content",
  "file.title": "Check file risk",
  "file.help": "Checks the name, format and warning signs without opening the file.",
  "upload.dropFile": "Choose a suspicious file",
  "file.limit": "Up to 20 MB • Macros and code are never opened",
  "file.ready": "Ready to scan",
  "phone.title": "Check a phone number",
  "phone.help": "Checks the format, not the owner or whether the number is safe.",
  "phone.examples": "Examples:",
  "phone.noteTitle": "About this result",
  "phone.note": "“Valid format” does not mean the number is active or safe.",
  "aside.privateTitle": "Private by default",
  "aside.privateText": "Content is analyzed locally. Nothing automatically leaves your device.",
  "aside.checks": "THE SYSTEM CHECKS",
  "aside.manipulation": "Psychological manipulation tactics",
  "aside.credentials": "Requests for money, OTPs or passwords",
  "aside.links": "Suspicious links and formats",
  "aside.context": "Context and likely scam type",
  "aside.saveTitle": "Save local history",
  "aside.saveText": "Off by default. Sensitive data is redacted.",
  "analyzer.disclaimerShort": "Decision-support tool; not a replacement for official verification.",
  "analyzer.button": "Analyze risk",
  "processing.kicker": "ANALYZING LOCALLY",
  "processing.extract": "Extracting content...",
  "processing.step1": "Extract",
  "processing.step2": "Scan signals",
  "processing.step3": "Classify",
  "processing.step4": "Create guidance",
  "results.kicker": "CHECK RESULT",
  "results.title": "Warning signs found",
  "results.new": "Analyze something else",
  "results.confidence": "Relative confidence",
  "results.possibleType": "POSSIBLE SCAM TYPE",
  "results.evidence": "Detected evidence",
  "results.redFlags": "Warning signs",
  "results.actionKicker": "WHAT TO DO NEXT",
  "results.actionTitle": "Your safety plan",
  "results.statusPrompt": "Have you already done any of these?",
  "results.statusClicked": "Opened the link",
  "results.statusShared": "Shared an OTP / password",
  "results.statusPaid": "Sent money",
  "results.safeReply": "SAFE REPLY",
  "results.copy": "Copy safe reply",
  "results.listen": "Listen",
  "results.export": "Download report",
  "disclaimer.title": "Do not treat “low risk” as absolutely safe.",
  "disclaimer.text": "Verify through the official app, website or phone number before sharing information or sending money.",
  "types.kicker": "LEARN THROUGH SCENARIOS",
  "types.title": "6 common scam types",
  "types.subtitle": "Choose one to see how it approaches you and which signals matter.",
  "types.bank": "Bank & OTP",
  "types.bankTag": "Account lock threat",
  "types.authority": "Fake authority",
  "types.authorityTag": "Investigation threat",
  "types.job": "Job & scholarship",
  "types.jobTag": "Upfront fee",
  "types.investment": "High-return investment",
  "types.investmentTag": "Guaranteed profit",
  "types.delivery": "Fake delivery",
  "types.deliveryTag": "Fee or unknown QR",
  "types.takeover": "Family impersonation",
  "types.takeoverTag": "Urgent money request",
  "types.demoBadge": "SIMULATED SCENARIO",
  "types.demoKicker": "HOW THEY MANIPULATE",
  "types.safeStep": "Do this now",
  "types.tryButton": "Try this sample in the analyzer",
  "learn.kicker": "RECOGNIZE IT EARLY",
  "learn.title": "Practice spotting scams",
  "learn.subtitle": "These scenarios contain deliberate distractions. Look for the small signals before choosing.",
  "learn.quiz": "SCAM OR SAFE?",
  "learn.safe": "Possibly safe",
  "learn.scam": "Shows scam signs",
  "learn.stopTitle": "Break the time pressure",
  "learn.stopText": "“Immediately” and “only 5 minutes left” are often used to stop you from thinking.",
  "learn.secretTitle": "Refuse secrecy",
  "learn.secretText": "A legitimate authority will not make you hide a money request from your family.",
  "learn.channelTitle": "Switch to an official channel",
  "learn.channelText": "Open the official app or find the hotline yourself; do not use a link or number sent by a stranger.",
  "history.kicker": "ONLY ON THIS DEVICE",
  "history.title": "Analysis history",
  "history.delete": "Delete all",
  "history.emptyTitle": "No saved analyses yet",
  "history.emptyText": "Enable history before analyzing. Sensitive content is redacted automatically.",
  "about.kicker": "TRANSPARENT BY DESIGN",
  "about.title": "Not magic. Signals you can inspect.",
  "about.text": "This MVP combines manipulation rules, technical indicators and context to produce a risk score. Every result includes evidence instead of a mysterious yes/no label.",
  "about.model": "Text model",
  "about.rules": "Manipulation rules",
  "about.indicators": "Technical signals",
  "about.context": "Context",
  "about.limitTitle": "Known limitations",
  "about.limit1": "New scams or very short content may not be detected.",
  "about.limit2": "OCR and speech recognition can be wrong; review the transcript.",
  "about.limit3": "Phone checks validate structure, not ownership.",
  "about.limit4": "File Risk Scan does not replace antivirus software.",
  "footer.tagline": "Check before you act. Always verify through official channels.",
  "footer.team": "DEVELOPMENT TEAM",
  "footer.teamName": "Team",
  "footer.private": "Privacy first",
  "footer.local": "Core analysis runs directly in your browser."
};

const copy = {
  vi: {
    placeholderText: "Ví dụ: Tài khoản của bạn sẽ bị khóa trong 5 phút. Nhấn vào link và gửi mã OTP ngay...",
    placeholderVoice: "Ví dụ: Người gọi tự xưng là công an và yêu cầu tôi giữ bí mật, chuyển tiền để xác minh...",
    placeholderImage: "Kết quả OCR sẽ xuất hiện tại đây. Bạn có thể chỉnh sửa trước khi phân tích.",
    placeholderVideo: "Nhập nội dung xuất hiện trong video để tăng chất lượng phân tích.",
    themeDark: "Chuyển nền tối",
    themeLight: "Chuyển nền sáng",
    menuOpen: "Mở menu",
    menuClose: "Đóng menu",
    languageChanged: "Đã chuyển sang tiếng Việt.",
    emptyInput: "Hãy nhập hoặc chọn nội dung trước khi phân tích.",
    invalidFile: "Tệp không hợp lệ hoặc vượt quá giới hạn cho phép.",
    copied: "Đã sao chép câu trả lời an toàn.",
    copyFailed: "Không thể sao chép tự động.",
    exportDone: "Đã tạo báo cáo đã che dữ liệu nhạy cảm.",
    historyDeleted: "Đã xóa toàn bộ lịch sử trên thiết bị.",
    historySaved: "Đã lưu bản phân tích đã che dữ liệu nhạy cảm.",
    historyOff: "Lịch sử đang tắt; kết quả không được lưu.",
    recordStart: "Đang thu âm...",
    recordReady: "Sẵn sàng thu âm",
    recordDenied: "Không thể dùng microphone. Hãy nhập nội dung thủ công.",
    speechStart: "Đang nghe... hãy nói nội dung chính.",
    speechUnsupported: "Trình duyệt không hỗ trợ nhận dạng giọng nói. Hãy nhập transcript.",
    ocrLoading: "Đang tải bộ OCR cục bộ...",
    ocrDone: "OCR hoàn tất. Hãy kiểm tra lại nội dung.",
    ocrFailed: "OCR không thể chạy. Bạn vẫn có thể nhập nội dung thủ công.",
    qrFound: "Đã phát hiện nội dung QR trong ảnh.",
    framesDone: "Đã trích xuất keyframe cục bộ.",
    scanningFile: "Đang đọc chỉ báo...",
    fileScanned: "Đã quét cục bộ",
    validFormat: "Đúng định dạng",
    invalidFormat: "Sai hoặc thiếu định dạng",
    quizCorrect: "Chính xác",
    quizWrong: "Chưa chính xác",
    quizScore: "điểm",
    high: "NGUY CƠ CAO",
    medium: "CẦN THẬN TRỌNG",
    low: "NGUY CƠ THẤP",
    highTitle: "Nhiều dấu hiệu thao túng",
    mediumTitle: "Có tín hiệu cần xác minh",
    lowTitle: "Chưa thấy dấu hiệu mạnh",
    highSummary: "Không tương tác thêm cho đến khi đã xác minh qua kênh chính thức.",
    mediumSummary: "Hãy dừng lại và kiểm tra độc lập trước khi hành động.",
    lowSummary: "Không phát hiện tín hiệu mạnh, nhưng kết quả không bảo đảm an toàn.",
    phoneValidSummary: "Số có cấu trúc hợp lệ, nhưng chưa được xác minh chủ sở hữu hoặc độ an toàn.",
    phoneInvalidSummary: "Số không khớp cấu trúc thông dụng. Hãy kiểm tra lại trước khi gọi hoặc lưu.",
    phonePremiumSummary: "Đây có thể là số dịch vụ tính phí cao. Chỉ gọi khi bạn đã xác minh đơn vị sở hữu.",
    noEvidence: "Không có đoạn văn bản để tô sáng. Hãy xem các chỉ báo kỹ thuật bên dưới.",
    fileTechnical: "Rủi ro kỹ thuật của tệp",
    phoneCheck: "Kiểm tra định dạng số",
    otherType: "Không xác định / cần thêm ngữ cảnh"
  },
  en: {
    placeholderText: "Example: Your account will be locked in 5 minutes. Click this link and send your OTP now...",
    placeholderVoice: "Example: The caller claimed to be police and told me to keep it secret and transfer money for verification...",
    placeholderImage: "OCR output will appear here. You can edit it before analysis.",
    placeholderVideo: "Type any visible or spoken content to improve the analysis.",
    themeDark: "Switch to dark theme",
    themeLight: "Switch to light theme",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageChanged: "Language changed to English.",
    emptyInput: "Enter or choose some content before analyzing.",
    invalidFile: "The file is invalid or exceeds the allowed limit.",
    copied: "Safe reply copied.",
    copyFailed: "Automatic copy failed.",
    exportDone: "A report with sensitive data redacted was created.",
    historyDeleted: "All on-device history was deleted.",
    historySaved: "A redacted analysis was saved locally.",
    historyOff: "History is off; this result was not saved.",
    recordStart: "Recording...",
    recordReady: "Ready to record",
    recordDenied: "Microphone access failed. Type the content manually.",
    speechStart: "Listening... say the key details.",
    speechUnsupported: "Speech recognition is not supported. Type a transcript instead.",
    ocrLoading: "Loading the on-device OCR engine...",
    ocrDone: "OCR complete. Please review the text.",
    ocrFailed: "OCR could not run. You can still type the content manually.",
    qrFound: "QR content was detected in the image.",
    framesDone: "Keyframes were extracted locally.",
    scanningFile: "Reading indicators...",
    fileScanned: "Local scan complete",
    validFormat: "Valid format",
    invalidFormat: "Invalid or incomplete format",
    quizCorrect: "Correct",
    quizWrong: "Not quite",
    quizScore: "points",
    high: "HIGH RISK",
    medium: "USE CAUTION",
    low: "LOW RISK",
    highTitle: "Multiple manipulation signals",
    mediumTitle: "Signals need verification",
    lowTitle: "No strong signals detected",
    highSummary: "Do not continue until you verify through an official channel.",
    mediumSummary: "Pause and check independently before you act.",
    lowSummary: "No strong signal was found, but this does not guarantee safety.",
    phoneValidSummary: "The structure is valid, but the owner and safety have not been verified.",
    phoneInvalidSummary: "The number does not match a common structure. Check it before calling or saving.",
    phonePremiumSummary: "This may be a premium-rate service number. Call only after verifying the organization.",
    noEvidence: "There is no text to highlight. Review the technical indicators below.",
    fileTechnical: "Technical file risk",
    phoneCheck: "Phone format check",
    otherType: "Unclear / more context needed"
  }
};

const placeholders = {
  "text.placeholder": "placeholderText",
  "voice.placeholder": "placeholderVoice",
  "image.placeholder": "placeholderImage",
  "video.placeholder": "placeholderVideo"
};

const demoSamples = {
  vi: {
    bank: "THÔNG BÁO KHẨN: Tài khoản ngân hàng của bạn sẽ bị khóa trong 5 phút. Nhấn https://secure-bank-verify.xyz và nhập mã OTP ngay để xác minh. Không cung cấp thông tin này cho bất kỳ ai.",
    authority: "Tôi là cán bộ công an. Số CCCD của anh/chị liên quan vụ rửa tiền. Giữ bí mật, không nói với người thân và chuyển 20 triệu đồng vào tài khoản tạm giữ ngay hôm nay.",
    scholarship: "Chúc mừng bạn nhận học bổng toàn phần! Vui lòng đóng phí xác minh 2.000.000đ trong hôm nay qua link bit.ly/nhan-hoc-bong để giữ suất."
  },
  en: {
    bank: "URGENT NOTICE: Your bank account will be locked in 5 minutes. Open https://secure-bank-verify.xyz and enter your OTP now to verify. Do not tell anyone.",
    authority: "I am a police officer. Your identity is linked to a money laundering case. Keep this secret and transfer $5,000 to the secure holding account immediately.",
    scholarship: "Congratulations, you won a full scholarship! Pay the $200 verification fee today through bit.ly/claim-scholarship to keep your place."
  }
};

const scamDemos = {
  bank: {
    icon: "#i-bank",
    accent: "#2f80ed",
    sender: { vi: "CẢNH BÁO NGÂN HÀNG", en: "BANK ALERT" },
    title: { vi: "Giả mạo ngân hàng", en: "Bank impersonation" },
    message: {
      vi: "Tài khoản sẽ bị khóa trong 5 phút. Nhấn link và nhập OTP để xác minh.",
      en: "Your account will be locked in 5 minutes. Open the link and enter your OTP."
    },
    link: "secure-bank-check.xyz",
    signals: {
      vi: ["Dọa khóa tài khoản", "Thúc giục", "Xin mã OTP"],
      en: ["Account lock threat", "Urgency", "Requests an OTP"]
    },
    action: {
      vi: "Tự mở ứng dụng ngân hàng hoặc gọi số trên mặt sau thẻ.",
      en: "Open the banking app yourself or call the number printed on your card."
    },
    sample: demoSamples.vi.bank,
    sampleEn: demoSamples.en.bank
  },
  authority: {
    icon: "#i-badge",
    accent: "#d94b55",
    sender: { vi: "CƠ QUAN ĐIỀU TRA", en: "INVESTIGATION UNIT" },
    title: { vi: "Giả danh công an", en: "Fake law enforcement" },
    message: {
      vi: "CCCD của bạn liên quan vụ án. Giữ bí mật và chuyển tiền để chứng minh vô tội.",
      en: "Your identity is linked to a case. Keep it secret and transfer money to prove innocence."
    },
    link: "hoso-dieutra-secure.info",
    signals: {
      vi: ["Giả danh quyền lực", "Yêu cầu giữ bí mật", "Tài khoản tạm giữ"],
      en: ["Claims authority", "Demands secrecy", "Holding account"]
    },
    action: {
      vi: "Ngắt cuộc gọi và tự tìm số chính thức của cơ quan để xác minh.",
      en: "End the call and find the agency's official number yourself."
    },
    sample: demoSamples.vi.authority,
    sampleEn: demoSamples.en.authority
  },
  job: {
    icon: "#i-briefcase",
    accent: "#8b5cf6",
    sender: { vi: "PHÒNG TUYỂN DỤNG", en: "RECRUITMENT TEAM" },
    title: { vi: "Việc làm và học bổng giả", en: "Fake job or scholarship" },
    message: {
      vi: "Bạn đã được chọn. Hãy đóng phí giữ chỗ hôm nay để nhận thư mời chính thức.",
      en: "You have been selected. Pay a reservation fee today to receive the official offer."
    },
    link: "career-award-form.top",
    signals: {
      vi: ["Trúng tuyển quá dễ", "Thu phí trước", "Tên miền lạ"],
      en: ["Instant acceptance", "Upfront fee", "Unknown domain"]
    },
    action: {
      vi: "Không đóng phí; liên hệ trường hoặc công ty qua website chính thức.",
      en: "Do not pay; contact the school or company through its official website."
    },
    sample: demoSamples.vi.scholarship,
    sampleEn: demoSamples.en.scholarship
  },
  investment: {
    icon: "#i-chart",
    accent: "#d9930a",
    sender: { vi: "CỐ VẤN ĐẦU TƯ", en: "INVESTMENT ADVISOR" },
    title: { vi: "Đầu tư siêu lợi nhuận", en: "High-return investment" },
    message: {
      vi: "Cam kết lãi 30% mỗi tuần. Nạp thử 2 triệu hôm nay để mở tài khoản VIP.",
      en: "Guaranteed 30% weekly return. Deposit today to unlock a VIP account."
    },
    link: "profit-vip-market.click",
    signals: {
      vi: ["Cam kết lợi nhuận", "Nạp tiền gấp", "Sàn không rõ nguồn"],
      en: ["Guaranteed return", "Urgent deposit", "Unknown platform"]
    },
    action: {
      vi: "Không chuyển tiền; kiểm tra giấy phép và cảnh báo từ cơ quan quản lý.",
      en: "Do not send money; check licenses and regulator warnings."
    },
    sample: "Cơ hội đầu tư độc quyền, cam kết lợi nhuận 30% mỗi tuần. Chuyển 2.000.000đ ngay hôm nay để mở tài khoản VIP và không nói với người khác.",
    sampleEn: "Exclusive investment opportunity with a guaranteed 30% weekly return. Transfer $100 today to unlock VIP access and keep it secret."
  },
  delivery: {
    icon: "#i-package",
    accent: "#19a774",
    sender: { vi: "ĐƠN VỊ GIAO HÀNG", en: "DELIVERY SERVICE" },
    title: { vi: "Giao hàng giả", en: "Fake delivery" },
    message: {
      vi: "Đơn hàng bị treo. Quét QR và trả phí 12.000đ để giao lại trong hôm nay.",
      en: "Your parcel is on hold. Scan the QR and pay a small fee for redelivery today."
    },
    link: "parcel-redelivery.site",
    signals: {
      vi: ["Phí nhỏ bất ngờ", "QR hoặc link lạ", "Dọa hủy đơn"],
      en: ["Unexpected small fee", "Unknown QR or link", "Cancellation threat"]
    },
    action: {
      vi: "Kiểm tra mã đơn trực tiếp trong ứng dụng mua hàng hoặc gọi shop.",
      en: "Check the order inside the shopping app or call the seller."
    },
    sample: "Đơn hàng của bạn đang bị treo. Quét QR hoặc vào parcel-redelivery.site và chuyển phí 12.000đ ngay hôm nay để không bị hủy.",
    sampleEn: "Your parcel is on hold. Open parcel-redelivery.site and pay a small fee today to avoid cancellation."
  },
  takeover: {
    icon: "#i-user-alert",
    accent: "#db5c9a",
    sender: { vi: "NGƯỜI THÂN", en: "FAMILY MEMBER" },
    title: { vi: "Mạo danh người thân", en: "Family impersonation" },
    message: {
      vi: "Mẹ chuyển gấp 8 triệu vào số này giúp con. Điện thoại con đang hỏng nên đừng gọi.",
      en: "Please send money urgently. My phone is broken, so do not call me."
    },
    link: "Tài khoản nhận tiền mới",
    signals: {
      vi: ["Từ chối gọi xác minh", "Mượn tiền gấp", "Tài khoản mới"],
      en: ["Avoids verification", "Urgent money request", "New payment account"]
    },
    action: {
      vi: "Gọi số cũ hoặc video call; hỏi một câu chỉ người thân biết.",
      en: "Call the known number or video-call and ask a private verification question."
    },
    sample: "Mẹ ơi chuyển gấp 8 triệu vào tài khoản mới này giúp con. Điện thoại con hỏng nên đừng gọi, chuyển ngay hôm nay nhé.",
    sampleEn: "Please send money urgently to this new account. My phone is broken, so do not call me."
  }
};

const ruleDefinitions = [
  {
    id: "urgency",
    weight: 14,
    labels: { vi: "Tạo cảm giác khẩn cấp", en: "Artificial urgency" },
    patterns: ["làm ngay", "chuyển ngay", "gửi ngay", "xác minh ngay", "khẩn cấp", "gấp", "trong 5 phút", "hôm nay", "sắp hết hạn", "immediately", "urgent", "within 5 minutes", "today", "act now", "expires soon"]
  },
  {
    id: "fear",
    weight: 17,
    labels: { vi: "Đe dọa hoặc gây sợ hãi", en: "Threat or fear" },
    patterns: ["bị khóa", "bị bắt", "bị phạt", "khởi tố", "rửa tiền", "mất tài khoản", "locked", "arrested", "fined", "prosecuted", "money laundering", "lose your account"]
  },
  {
    id: "secrecy",
    weight: 18,
    labels: { vi: "Yêu cầu giữ bí mật", en: "Secrecy request" },
    patterns: ["không nói với ai", "giữ bí mật", "không nói với người thân", "tuyệt đối bí mật", "do not tell anyone", "keep this secret", "do not tell your family", "strictly confidential"]
  },
  {
    id: "authority",
    weight: 12,
    labels: { vi: "Giả danh tổ chức có thẩm quyền", en: "Authority impersonation" },
    patterns: ["công an", "tòa án", "viện kiểm sát", "cán bộ", "ngân hàng", "nhân viên ngân hàng", "police", "court", "prosecutor", "officer", "bank", "bank officer"]
  },
  {
    id: "payment",
    weight: 25,
    labels: { vi: "Yêu cầu chuyển tiền hoặc đóng phí", en: "Payment request" },
    patterns: ["chuyển tiền", "chuyển khoản", "đặt cọc", "đóng phí", "phí xác minh", "tài khoản tạm giữ", "transfer money", "wire money", "deposit", "pay a fee", "verification fee", "holding account"]
  },
  {
    id: "credential",
    weight: 28,
    labels: { vi: "Yêu cầu OTP hoặc thông tin đăng nhập", en: "Credential request" },
    patterns: ["otp", "mật khẩu", "mã xác nhận", "mã đăng nhập", "thông tin thẻ", "password", "verification code", "login code", "card details", "pin code"]
  },
  {
    id: "reward",
    weight: 15,
    labels: { vi: "Phần thưởng quá hấp dẫn", en: "Too-good-to-be-true reward" },
    patterns: ["trúng thưởng", "nhận quà", "học bổng toàn phần", "lợi nhuận cao", "cam kết lợi nhuận", "won a prize", "claim your gift", "full scholarship", "high return", "guaranteed profit"]
  },
  {
    id: "remote_app",
    weight: 26,
    labels: { vi: "Yêu cầu cài app hoặc chia sẻ màn hình", en: "Remote access request" },
    patterns: ["cài app", "cài ứng dụng", "chia sẻ màn hình", "anydesk", "teamviewer", "install app", "install this application", "share your screen", "remote access"]
  },
  {
    id: "legal_case",
    weight: 22,
    labels: { vi: "Gắn nạn nhân với vụ án", en: "Claims of a legal case" },
    patterns: ["vụ án", "đường dây rửa tiền", "phục vụ điều tra", "liên quan vụ án", "legal case", "criminal investigation"]
  },
  {
    id: "safe_account",
    weight: 32,
    labels: { vi: "Tài khoản an toàn giả", en: "Fake safe account" },
    patterns: ["tài khoản an toàn", "tài khoản điều tra", "tài khoản của bộ", "chuyển toàn bộ số tiền", "secure holding account", "investigation account"]
  },
  {
    id: "arrest_threat",
    weight: 28,
    labels: { vi: "Đe dọa bắt giữ hoặc truy tố", en: "Arrest or prosecution threat" },
    patterns: ["bắt tạm giam", "truy tố", "lệnh bắt", "nếu không hợp tác", "arrest warrant", "face prosecution"]
  },
  {
    id: "deposit_fee",
    weight: 27,
    labels: { vi: "Yêu cầu nạp tiền hoặc phí trước", en: "Upfront deposit or fee" },
    patterns: ["nạp trước", "phí kích hoạt", "phí hồ sơ", "phí bảo đảm", "advance fee", "activation fee", "upfront deposit"]
  },
  {
    id: "task_job",
    weight: 22,
    labels: { vi: "Việc làm nhiệm vụ đáng ngờ", en: "Suspicious task-based job" },
    patterns: ["cộng tác viên", "làm việc tại nhà", "nhận nhiệm vụ", "đơn hàng ảo", "online task", "work from home task"]
  },
  {
    id: "income_promise",
    weight: 18,
    labels: { vi: "Hứa thu nhập bất thường", en: "Unusually high income promise" },
    patterns: ["việc nhẹ lương cao", "kiếm tiền online", "thu nhập mỗi ngày", "lương cao", "high daily income", "easy money"]
  },
  {
    id: "refund_promise",
    weight: 18,
    labels: { vi: "Hứa hoàn cả gốc lẫn lãi", en: "Refund or profit promise" },
    patterns: ["hoàn lại cả gốc lẫn lãi", "hoàn tiền sau", "sẽ hoàn lại", "hoàn trả", "refund with profit", "return principal and profit"]
  },
  {
    id: "login_request",
    weight: 24,
    labels: { vi: "Yêu cầu đăng nhập hoặc xác minh", en: "Sign-in or verification request" },
    patterns: ["đăng nhập", "xác minh tài khoản", "cập nhật thông tin", "xác minh danh tính", "verify your account", "sign in now", "update your details"]
  },
  {
    id: "delivery_alert",
    weight: 21,
    labels: { vi: "Thông báo giao hàng bất thường", en: "Suspicious delivery alert" },
    patterns: ["đơn hàng bị lỗi", "phí giao hàng", "xác nhận đơn hàng", "mã vận đơn", "delivery fee", "parcel failed"]
  },
  {
    id: "family_emergency",
    weight: 24,
    labels: { vi: "Mạo danh người thân gặp việc gấp", en: "Family emergency impersonation" },
    patterns: ["điện thoại em hỏng", "chuyển giúp em", "lát em nói sau", "đừng gọi", "my phone is broken", "do not call me"]
  },
  {
    id: "loan_fee",
    weight: 28,
    labels: { vi: "Khoản vay yêu cầu phí trước", en: "Advance-fee loan" },
    patterns: ["vay tiền online", "phí giải ngân", "phí bảo hiểm khoản vay", "đóng phí trước khi giải ngân", "loan release fee", "pay before disbursement"]
  },
  {
    id: "social_recovery",
    weight: 20,
    labels: { vi: "Giả mạo khôi phục mạng xã hội", en: "Fake social account recovery" },
    patterns: ["tài khoản facebook bị khóa", "tài khoản zalo bị khóa", "khôi phục tài khoản", "vi phạm chính sách", "social account locked", "recover your account"]
  }
];

const scamTypeDefinitions = [
  {
    id: "bank_phishing",
    labels: { vi: "Giả mạo ngân hàng / Phishing", en: "Bank impersonation / Phishing" },
    keywords: ["ngân hàng", "tài khoản", "otp", "thông tin thẻ", "bank", "account", "verification code", "card details"]
  },
  {
    id: "fake_authority",
    labels: { vi: "Giả danh cơ quan có thẩm quyền", en: "Fake authority" },
    keywords: ["công an", "tòa án", "viện kiểm sát", "cán bộ", "rửa tiền", "police", "court", "officer", "money laundering"]
  },
  {
    id: "scholarship_job",
    labels: { vi: "Học bổng / Tuyển dụng giả", en: "Fake scholarship / Job" },
    keywords: ["học bổng", "tuyển dụng", "việc làm", "nhận việc", "scholarship", "recruitment", "job offer", "hiring"]
  },
  {
    id: "investment",
    labels: { vi: "Đầu tư lợi nhuận cao", en: "High-return investment" },
    keywords: ["đầu tư", "lợi nhuận", "tiền ảo", "crypto", "investment", "profit", "guaranteed return"]
  },
  {
    id: "delivery",
    labels: { vi: "Giao hàng / Đặt cọc giả", en: "Fake delivery / Deposit" },
    keywords: ["giao hàng", "đơn hàng", "shipper", "bưu kiện", "delivery", "parcel", "package", "courier"]
  },
  {
    id: "account_takeover",
    labels: { vi: "Chiếm tài khoản / Mạo danh người thân", en: "Account takeover / Impersonation" },
    keywords: ["mượn tiền", "mất tài khoản", "nick mới", "tài khoản mới", "điện thoại em hỏng", "borrow money", "new account", "hacked account", "family emergency"]
  },
  {
    id: "advance_fee_loan",
    labels: { vi: "Vay tiền yêu cầu phí trước", en: "Advance-fee loan" },
    keywords: ["vay tiền", "giải ngân", "phí bảo hiểm khoản vay", "phí hồ sơ", "loan", "disbursement", "release fee"]
  },
  {
    id: "social_phishing",
    labels: { vi: "Giả mạo khôi phục mạng xã hội", en: "Social account phishing" },
    keywords: ["facebook bị khóa", "zalo bị khóa", "khôi phục tài khoản", "vi phạm chính sách", "social account locked", "recover account"]
  },
  {
    id: "reward_scam",
    labels: { vi: "Trúng thưởng / Quà tặng giả", en: "Fake prize / Gift" },
    keywords: ["trúng thưởng", "nhận quà", "phí nhận thưởng", "voucher", "won a prize", "claim your gift"]
  }
];

const actionCatalog = {
  common: {
    vi: [
      "Dừng tương tác và không bấm thêm liên kết nào.",
      "Không cung cấp OTP, mật khẩu, mã PIN hoặc thông tin thẻ.",
      "Tự mở ứng dụng hoặc website chính thức để kiểm tra.",
      "Lưu ảnh chụp, số điện thoại và nội dung làm bằng chứng.",
      "Báo cáo tài khoản hoặc số liên hệ trên nền tảng liên quan."
    ],
    en: [
      "Stop the interaction and do not open any more links.",
      "Do not share OTPs, passwords, PINs or card details.",
      "Open the official app or website yourself to verify.",
      "Keep screenshots, phone numbers and messages as evidence.",
      "Report the account or contact on the relevant platform."
    ]
  },
  bank_phishing: {
    vi: [
      "Không đăng nhập từ liên kết trong tin nhắn.",
      "Không đọc hoặc nhập OTP cho bất kỳ ai.",
      "Mở ứng dụng ngân hàng chính thức để kiểm tra thông báo.",
      "Gọi hotline in trên thẻ hoặc website chính thức.",
      "Nếu đã cung cấp thông tin, khóa thẻ/tài khoản ngay."
    ],
    en: [
      "Do not sign in through the message link.",
      "Never read or enter an OTP for another person.",
      "Open the official banking app to check alerts.",
      "Call the number printed on your card or official website.",
      "If you shared details, lock the card or account immediately."
    ]
  },
  fake_authority: {
    vi: [
      "Ngắt cuộc gọi và không tranh luận với người gọi.",
      "Không chuyển tiền vào “tài khoản tạm giữ”.",
      "Không cài ứng dụng hoặc chia sẻ màn hình.",
      "Liên hệ cơ quan qua số công khai trên website chính thức.",
      "Báo cho người thân tin cậy trước khi làm bất cứ điều gì."
    ],
    en: [
      "End the call without arguing with the caller.",
      "Do not transfer money to a “secure holding account.”",
      "Do not install apps or share your screen.",
      "Contact the agency using a number on its official website.",
      "Tell a trusted person before taking any action."
    ]
  },
  scholarship_job: {
    vi: [
      "Không đóng phí trước để nhận học bổng hoặc việc làm.",
      "Kiểm tra tên miền và email của tổ chức.",
      "Liên hệ trường hoặc doanh nghiệp qua website chính thức.",
      "Không gửi CCCD, hộ chiếu hoặc thông tin ngân hàng.",
      "Tìm cảnh báo cộng đồng về tên chương trình."
    ],
    en: [
      "Do not pay upfront for a scholarship or job.",
      "Check the organization’s domain and email address.",
      "Contact the school or company through its official website.",
      "Do not send identity documents or bank details.",
      "Search for independent warnings about the program."
    ]
  },
  file: {
    vi: [
      "Không mở hoặc chạy tệp nếu chưa xác minh người gửi.",
      "Hỏi lại người gửi qua một kênh liên lạc khác.",
      "Không bật macro hoặc nội dung chủ động trong tài liệu.",
      "Quét bằng phần mềm bảo mật đáng tin cậy.",
      "Xóa tệp nếu không cần và có dấu hiệu rủi ro cao."
    ],
    en: [
      "Do not open or run the file before verifying the sender.",
      "Ask the sender through a separate communication channel.",
      "Do not enable macros or active document content.",
      "Scan it with trusted security software.",
      "Delete it if unnecessary and high-risk indicators are present."
    ]
  },
  phone: {
    vi: [
      "Kiểm tra lại mã quốc gia và số chữ số.",
      "Không xem “đúng định dạng” là đã xác minh an toàn.",
      "Tìm số liên hệ chính thức từ website của tổ chức.",
      "Không gọi lại số lạ nếu tin nhắn kèm yêu cầu chuyển tiền.",
      "Chặn và báo cáo nếu số liên tục gây áp lực."
    ],
    en: [
      "Check the country code and number of digits.",
      "Do not treat “valid format” as verified safe.",
      "Find the official contact number on the organization’s website.",
      "Do not call back when a message also asks for money.",
      "Block and report numbers that repeatedly apply pressure."
    ]
  }
};

const safeReplies = {
  vi: "Tôi sẽ tự xác minh qua kênh chính thức. Tôi không cung cấp mã OTP, mật khẩu hoặc chuyển tiền qua yêu cầu này.",
  en: "I will verify this through an official channel. I will not share an OTP or password, or send money based on this request."
};

const urgentActions = {
  clicked: {
    vi: [
      "Thoát trang vừa mở và không nhập thêm thông tin.",
      "Đổi mật khẩu email, ngân hàng và các tài khoản quan trọng nếu đã đăng nhập."
    ],
    en: [
      "Leave the page you opened and do not enter more information.",
      "Change passwords for email, banking and important accounts if you signed in."
    ]
  },
  shared: {
    vi: [
      "Gọi ngay hotline ngân hàng để khóa thẻ hoặc tài khoản tạm thời.",
      "Đổi mật khẩu và bật xác thực hai lớp cho các tài khoản quan trọng."
    ],
    en: [
      "Call the bank immediately to temporarily lock the card or account.",
      "Change passwords and enable two-factor authentication on important accounts."
    ]
  },
  paid: {
    vi: [
      "Gọi ngân hàng yêu cầu tra soát hoặc thu hồi giao dịch càng sớm càng tốt.",
      "Trình báo cơ quan công an, kèm sao kê và toàn bộ bằng chứng."
    ],
    en: [
      "Ask the bank to trace or recall the transaction as soon as possible.",
      "Report it to law enforcement with statements and all available evidence."
    ]
  }
};

const protectivePhrases = [
  "không bao giờ yêu cầu",
  "không chia sẻ mã",
  "không cung cấp otp",
  "kể cả nhân viên",
  "cảnh giác",
  "giả danh",
  "cảnh báo lừa đảo",
  "phòng tránh lừa đảo",
  "dấu hiệu lừa đảo",
  "kênh chính thức",
  "never share",
  "we never ask",
  "official channel"
];

const urlShorteners = ["bit.ly", "tinyurl.com", "t.co", "goo.gl", "cutt.ly", "rb.gy", "is.gd"];
const riskyTlds = ["xyz", "top", "icu", "click", "live", "shop", "vip", "win", "tk", "ml", "ga", "cf"];
const brandDomains = {
  vietcombank: ["vietcombank.com.vn"],
  techcombank: ["techcombank.com"],
  bidv: ["bidv.com.vn"],
  momo: ["momo.vn"],
  shopee: ["shopee.vn"],
  facebook: ["facebook.com", "fb.com"],
  apple: ["apple.com"]
};

const vnCarriers = [
  { prefixes: ["032", "033", "034", "035", "036", "037", "038", "039", "086", "096", "097", "098"], name: "Viettel" },
  { prefixes: ["081", "082", "083", "084", "085", "088", "091", "094"], name: "VinaPhone" },
  { prefixes: ["070", "076", "077", "078", "079", "089", "090", "093"], name: "MobiFone" },
  { prefixes: ["052", "056", "058", "092"], name: "Vietnamobile" },
  { prefixes: ["059", "099"], name: "Gmobile" }
];

const comboDefinitions = [
  {
    id: "combo_legal_isolation",
    required: ["authority", "secrecy", "safe_account"],
    weight: 40,
    labels: {
      vi: "Tổ hợp: giả danh pháp luật + giữ bí mật + tài khoản an toàn",
      en: "Combo: fake authority + secrecy + safe account"
    }
  },
  {
    id: "combo_legal_threat",
    required: ["authority", "arrest_threat", "safe_account"],
    weight: 35,
    labels: {
      vi: "Tổ hợp: giả danh pháp luật + đe dọa bắt giữ + chuyển tiền",
      en: "Combo: fake authority + arrest threat + money transfer"
    }
  },
  {
    id: "combo_task_job",
    required: ["task_job", "deposit_fee", "urgency"],
    weight: 25,
    labels: {
      vi: "Tổ hợp: việc làm nhiệm vụ + nạp tiền + thúc ép",
      en: "Combo: task job + upfront payment + urgency"
    }
  },
  {
    id: "combo_phishing",
    required: ["authority", "login_request", "url"],
    weight: 25,
    labels: {
      vi: "Tổ hợp: giả danh tổ chức + yêu cầu đăng nhập + link",
      en: "Combo: impersonation + sign-in request + link"
    }
  },
  {
    id: "combo_investment",
    required: ["reward", "payment", "urgency"],
    weight: 24,
    labels: {
      vi: "Tổ hợp: lợi ích cao + yêu cầu tiền + thúc ép",
      en: "Combo: high reward + payment request + urgency"
    }
  },
  {
    id: "combo_delivery",
    required: ["delivery_alert", "url"],
    weight: 20,
    labels: {
      vi: "Tổ hợp: giao hàng bất thường + link lạ",
      en: "Combo: suspicious delivery + unknown link"
    }
  },
  {
    id: "combo_device_takeover",
    required: ["remote_app", "authority"],
    weight: 30,
    labels: {
      vi: "Tổ hợp: giả danh + dụ cài app hoặc điều khiển từ xa",
      en: "Combo: impersonation + remote-control app"
    }
  },
  {
    id: "combo_family_payment",
    required: ["family_emergency", "payment"],
    weight: 24,
    labels: {
      vi: "Tổ hợp: mạo danh người thân + yêu cầu chuyển tiền",
      en: "Combo: family impersonation + money request"
    }
  }
];

const quizItems = {
  vi: [
    {
      text: "Người gọi đọc đúng họ tên và bốn số cuối thẻ, sau đó yêu cầu bạn đọc mã OTP để hủy giao dịch lạ.",
      answer: "scam",
      explanation: "Biết thông tin cá nhân không chứng minh người gọi là ngân hàng. Ngân hàng không yêu cầu khách hàng đọc OTP."
    },
    {
      text: "Tin nhắn không kèm đường link, chỉ đề nghị bạn tự mở ứng dụng ngân hàng hoặc gọi số in trên mặt sau thẻ.",
      answer: "safe",
      explanation: "Nội dung hướng bạn tự dùng kênh chính thức và không yêu cầu cung cấp thông tin bí mật."
    },
    {
      text: "Người tự xưng là công an yêu cầu giữ bí mật với gia đình và chuyển tiền vào tài khoản tạm giữ để chứng minh vô tội.",
      answer: "scam",
      explanation: "Cơ quan điều tra không làm việc bằng cách ép giữ bí mật và chuyển tiền qua điện thoại."
    },
    {
      text: "Ứng dụng giao hàng chính thức báo đơn chưa thanh toán và yêu cầu bạn mở trực tiếp ứng dụng để kiểm tra, không gửi link.",
      answer: "safe",
      explanation: "Bạn được hướng tới ứng dụng chính thức, không bị ép chuyển khoản ngoài nền tảng hay cung cấp mã xác nhận."
    },
    {
      text: "Nhà tuyển dụng dùng email tên công ty nhưng yêu cầu đóng “phí giữ chỗ” vào tài khoản cá nhân và hứa hoàn lại trong ngày đầu đi làm.",
      answer: "scam",
      explanation: "Tên hiển thị email có thể bị giả. Yêu cầu ứng viên chuyển phí vào tài khoản cá nhân là dấu hiệu rủi ro mạnh."
    },
    {
      text: "Một người thân nhắn mượn tiền từ tài khoản cũ. Bạn gọi video bằng số đã lưu, hỏi câu xác minh riêng và họ trả lời đúng.",
      answer: "safe",
      explanation: "Việc xác minh qua kênh cũ, có hình ảnh trực tiếp và câu hỏi riêng làm giảm đáng kể nguy cơ mạo danh."
    },
    {
      text: "Email “security@micros0ft-support.com” báo hộp thư sắp khóa trong 30 phút và yêu cầu đăng nhập để giữ dữ liệu.",
      answer: "scam",
      explanation: "Tên miền dùng số 0 thay chữ o, kết hợp áp lực thời gian và link đăng nhập là mô-típ phishing."
    },
    {
      text: "Ngân hàng thông báo bảo trì hệ thống vào cuối tuần, không yêu cầu thao tác và nhắc khách hàng không cung cấp OTP.",
      answer: "safe",
      explanation: "Thông báo không yêu cầu hành động, không gắn link và chủ động nhắc bảo vệ OTP."
    },
    {
      text: "Thư học bổng yêu cầu nộp hồ sơ trên tên miền chính thức của trường, không thu phí và cho phép xác minh qua phòng tuyển sinh.",
      answer: "safe",
      explanation: "Tên miền chính thức, không thu phí và có kênh xác minh độc lập là các tín hiệu tích cực."
    },
    {
      text: "Mã QR được dán đè lên bảng thanh toán tại quán. Sau khi quét, trang web yêu cầu đăng nhập ngân hàng để nhận ưu đãi.",
      answer: "scam",
      explanation: "QR bị dán đè và trang ngoài yêu cầu đăng nhập ngân hàng. Hãy hỏi nhân viên và dùng ứng dụng chính thức."
    },
    {
      text: "Người mua trên chợ online gửi QR và nói người bán phải quét rồi nhập thông tin thẻ mới nhận được tiền.",
      answer: "scam",
      explanation: "Người bán không cần nhập thông tin thẻ hoặc OTP để nhận tiền. QR này có thể dẫn tới trang đánh cắp tài khoản."
    },
    {
      text: "Nhân viên hỗ trợ nói máy bạn có virus, yêu cầu cài AnyDesk và chia sẻ màn hình để họ “khóa giao dịch”.",
      answer: "scam",
      explanation: "Yêu cầu cài ứng dụng điều khiển từ xa và chia sẻ màn hình có thể giúp kẻ xấu chiếm thiết bị và tài khoản."
    },
    {
      text: "Shipper đọc đúng mã đơn nhưng yêu cầu bạn cung cấp mã OTP vừa gửi đến điện thoại để xác nhận giao hàng.",
      answer: "scam",
      explanation: "Thông tin đơn hàng có thể bị lộ. OTP không phải mã giao hàng và không được cung cấp cho shipper."
    }
  ],
  en: [
    {
      text: "The caller knows your full name and last four card digits, then asks for your OTP to cancel a suspicious transaction.",
      answer: "scam",
      explanation: "Knowing personal details does not prove the caller is the bank. Banks do not ask customers to read out OTPs."
    },
    {
      text: "A message contains no link and tells you to open the banking app yourself or call the number printed on your card.",
      answer: "safe",
      explanation: "It directs you to an official channel and does not request confidential information."
    },
    {
      text: "Someone claiming to be police tells you to keep the case secret and transfer money to a holding account to prove your innocence.",
      answer: "scam",
      explanation: "Law enforcement does not demand secrecy and money transfers over the phone."
    },
    {
      text: "The official delivery app says an order is unpaid and asks you to open the app to review it. No link is included.",
      answer: "safe",
      explanation: "The request stays inside the official app and does not ask for an external transfer or verification code."
    },
    {
      text: "A recruiter uses the company name but asks for a refundable reservation fee sent to a personal bank account.",
      answer: "scam",
      explanation: "Display names can be spoofed. A fee sent to a personal account is a strong warning sign."
    },
    {
      text: "A relative asks for money from their old account. You video-call their saved number and verify a private detail.",
      answer: "safe",
      explanation: "An independent call through a known channel and a private verification question greatly reduce impersonation risk."
    },
    {
      text: "An email from “security@micros0ft-support.com” says your mailbox closes in 30 minutes unless you sign in.",
      answer: "scam",
      explanation: "The domain swaps a zero for the letter o, while urgency and a sign-in link match a phishing pattern."
    },
    {
      text: "Your bank announces weekend maintenance, requests no action and reminds customers never to share OTPs.",
      answer: "safe",
      explanation: "There is no action request or link, and the message reinforces safe behavior."
    },
    {
      text: "A scholarship application uses the university's official domain, charges no fee and can be verified with admissions.",
      answer: "safe",
      explanation: "An official domain, no upfront fee and an independent verification channel are positive signals."
    },
    {
      text: "A QR sticker is placed over a restaurant payment sign. The opened page asks you to log in to your bank for a reward.",
      answer: "scam",
      explanation: "An overlaid QR and an external banking login are dangerous. Ask staff and use the official payment flow."
    },
    {
      text: "An online buyer sends a QR and says the seller must scan it and enter card details to receive payment.",
      answer: "scam",
      explanation: "A seller does not need to enter card details or an OTP to receive money."
    },
    {
      text: "A support agent says your device is infected and asks you to install AnyDesk and share your screen.",
      answer: "scam",
      explanation: "Remote-control software and screen sharing can give an attacker access to your device and accounts."
    },
    {
      text: "A courier knows your order number but asks for the OTP that just arrived to confirm delivery.",
      answer: "scam",
      explanation: "Order details may be leaked. An OTP is not a delivery code and must not be shared."
    }
  ]
};

const state = {
  locale: localStorage.getItem("scamshield_locale") || (navigator.language.toLowerCase().startsWith("en") ? "en" : "vi"),
  theme: localStorage.getItem("scamshield_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  familyMode: localStorage.getItem("scamshield_family") === "true",
  activeType: "text",
  mediaRecorder: null,
  recordingStream: null,
  recordingChunks: [],
  recordingTimer: null,
  recordingSeconds: 0,
  imageFile: null,
  imageUrl: null,
  videoFile: null,
  videoUrl: null,
  selectedFile: null,
  fileResult: null,
  currentResult: null,
  activeScamType: "bank",
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizTimer: null,
  typingTimer: null,
  toastTimer: null,
  mobileMenuOpen: false
};

function currentCopy(key) {
  return copy[state.locale][key] || copy.vi[key] || key;
}

function localizeLabel(labels) {
  return labels[state.locale] || labels.vi;
}

function localizedTypeLabel(type) {
  if (type.id === "file") return currentCopy("fileTechnical");
  if (type.id === "phone") return currentCopy("phoneCheck");
  if (type.id === "other") return currentCopy("otherType");
  const definition = scamTypeDefinitions.find((item) => item.id === type.id);
  return definition ? localizeLabel(definition.labels) : type.label;
}

function localizedEvidenceLabel(item) {
  const definition = ruleDefinitions.find((rule) => rule.id === item.type);
  if (definition) return localizeLabel(definition.labels);
  if (item.type === "url") {
    return item.label || (state.locale === "vi" ? "Liên kết cần kiểm tra" : "Link needs verification");
  }
  return item.label;
}

function captureVietnameseText() {
  $$("[data-i18n]").forEach((element) => {
    if (!element.dataset.viText) {
      element.dataset.viText = element.textContent.trim();
    }
  });
}

function applyLanguage(locale) {
  state.locale = locale;
  document.documentElement.lang = locale;
  localStorage.setItem("scamshield_locale", locale);

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = locale === "en" && en[key] ? en[key] : element.dataset.viText;
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    const copyKey = placeholders[element.dataset.i18nPlaceholder];
    element.placeholder = currentCopy(copyKey);
  });

  const langButton = $("#languageToggle");
  const labels = $$("span", langButton).filter((item) => !item.classList.contains("lang-divider"));
  labels.forEach((item) => item.classList.toggle("lang-active", item.textContent === locale.toUpperCase()));
  langButton.setAttribute("aria-label", locale === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");

  updateThemeButtonLabel();
  updateMobileMenuLabel();
  renderScamDemo(state.activeScamType);
  updateQuiz();
  renderHistory();
  if (state.currentResult) {
    renderResult(state.currentResult);
  }
  $("#a11yStatus").textContent = currentCopy("languageChanged");
  runTypingEffect();
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("scamshield_theme", theme);
  const color = theme === "dark" ? "#061525" : "#f2f6fa";
  $('meta[name="theme-color"]').setAttribute("content", color);
  updateThemeButtonLabel();
}

function updateThemeButtonLabel() {
  $("#themeToggle").setAttribute("aria-label", state.theme === "light" ? currentCopy("themeDark") : currentCopy("themeLight"));
}

function updateMobileMenuLabel() {
  const button = $("#mobileMenuToggle");
  button.setAttribute("aria-label", currentCopy(state.mobileMenuOpen ? "menuClose" : "menuOpen"));
}

function setMobileMenu(open) {
  state.mobileMenuOpen = Boolean(open);
  const button = $("#mobileMenuToggle");
  const nav = $("#mobileNav");
  button.setAttribute("aria-expanded", String(state.mobileMenuOpen));
  nav.hidden = !state.mobileMenuOpen;
  nav.classList.toggle("is-open", state.mobileMenuOpen);
  document.body.classList.toggle("mobile-menu-open", state.mobileMenuOpen);
  updateMobileMenuLabel();
}

function applyFamilyMode(enabled) {
  state.familyMode = enabled;
  document.body.classList.toggle("family-mode", enabled);
  $("#familyToggle").setAttribute("aria-pressed", String(enabled));
  localStorage.setItem("scamshield_family", String(enabled));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function runTypingEffect() {
  const element = $("[data-i18n='hero.titleLine2']");
  if (!element) return;
  window.clearTimeout(state.typingTimer);
  const target = element.textContent;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || target.length > 70) {
    element.classList.remove("is-typing");
    element.textContent = target;
    return;
  }

  const characters = Array.from(target);
  let index = 0;
  element.textContent = "";
  element.classList.add("is-typing");

  const typeNext = () => {
    index += 1;
    element.textContent = characters.slice(0, index).join("");
    if (index < characters.length) {
      state.typingTimer = window.setTimeout(typeNext, 34);
    } else {
      state.typingTimer = window.setTimeout(() => element.classList.remove("is-typing"), 650);
    }
  };
  state.typingTimer = window.setTimeout(typeNext, 180);
}

function autoResizeTextarea(textarea) {
  if (!textarea) return;
  textarea.style.height = "auto";
  const maxHeight = 420;
  const nextHeight = Math.min(Math.max(textarea.scrollHeight, 132), maxHeight);
  textarea.style.height = `${nextHeight}px`;
  textarea.dataset.manualResize = String(textarea.scrollHeight > maxHeight);
}

function initializeHoverboard() {
  const board = $("#heroHoverboard");
  const card = $("[data-hoverboard-card]");
  if (!board || !card) return;
  if (window.matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

  let frame = 0;
  board.addEventListener("pointermove", (event) => {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      const rect = board.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - .5) * 12;
      const rotateX = (.5 - y) * 10;
      card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--pointer-x", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--pointer-y", `${(y * 100).toFixed(1)}%`);
      board.classList.add("is-hovering");
    });
  });

  board.addEventListener("pointerleave", () => {
    window.cancelAnimationFrame(frame);
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--pointer-x", "50%");
    card.style.setProperty("--pointer-y", "50%");
    board.classList.remove("is-hovering");
  });
}

function initializeScrollReveal() {
  const elements = [
    ...$$(".section-heading"),
    $(".analyzer-shell"),
    $(".scam-type-showcase"),
    $(".learn-grid"),
    $(".history-list"),
    $(".empty-state"),
    $(".disclaimer-banner")
  ].filter(Boolean);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: "0px 0px -30px" });

  elements.forEach((element) => {
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });
}

function initializeActiveNavigation() {
  if (!("IntersectionObserver" in window)) return;
  const links = $$(".desktop-nav a, .mobile-nav a");
  const sections = [...new Set(links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean))];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("is-current", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { threshold: [.2, .4, .6], rootMargin: "-20% 0px -55%" });
  sections.forEach((section) => observer.observe(section));
}

function renderScamDemo(typeId) {
  const demo = scamDemos[typeId] || scamDemos.bank;
  const locale = state.locale;
  const panel = $(".scam-demo-panel");
  const content = $(".demo-content", panel);
  state.activeScamType = typeId;
  panel.style.setProperty("--demo-accent", demo.accent);
  $("#scamDemoSender").textContent = demo.sender[locale];
  $("#scamDemoTitle").textContent = demo.title[locale];
  $("#scamDemoMessage").textContent = demo.message[locale];
  $("#scamDemoLink").textContent = demo.link;
  $("#scamDemoAction").textContent = demo.action[locale];
  $("#scamDemoIcon use").setAttribute("href", demo.icon);

  const signalList = $("#scamDemoSignals");
  signalList.replaceChildren();
  demo.signals[locale].forEach((signal) => signalList.append(createElement("span", "", signal)));

  $$(".scam-type-card").forEach((card) => {
    const active = card.dataset.scamType === typeId;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });

  content.classList.remove("is-changing");
  void content.offsetWidth;
  content.classList.add("is-changing");
}

function useCurrentScamDemo() {
  const demo = scamDemos[state.activeScamType] || scamDemos.bank;
  switchTab("text");
  $("#textInput").value = state.locale === "vi" ? demo.sample : demo.sampleEn;
  autoResizeTextarea($("#textInput"));
  updateLanguageDetection();
  $("#analyzer").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => $("#textInput").focus(), 450);
}

function switchTab(type, shouldScroll = false) {
  state.activeType = type;
  $$(".analyzer-tab").forEach((tab) => {
    const active = tab.dataset.tab === type;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  $$(".input-panel").forEach((panel) => {
    const active = panel.dataset.panel === type;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  if (shouldScroll) {
    $("#analyzer").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
}

function redactSensitive(text) {
  return String(text || "")
    .replace(/\b(?:\d[ -]?){13,19}\b/g, (match) => {
      const digits = match.replace(/\D/g, "");
      return `•••• •••• •••• ${digits.slice(-4)}`;
    })
    .replace(/\b(otp|mã|ma|code|pin|verification code)(\D{0,12})(\d{4,8})\b/gi, "$1$2••••••")
    .replace(/(?:\+?84|0)(?:[\s.\-]?\d){8,10}\b/g, (match) => `•••${match.replace(/\D/g, "").slice(-3)}`)
    .replace(/\b\d{6}\b/g, "••••••")
    .replace(/([?&](?:token|key|code)=)[^&\s]+/gi, "$1REDACTED");
}

function detectLanguage(text) {
  const vietnameseMarks = (text.match(/[ăâđêôơưáàảãạấầẩẫậắằẳẵặéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]/gi) || []).length;
  const folded = foldKeepLen(text);
  const viWords = (folded.match(/\b(va|la|cua|ban|tai khoan|khong|duoc|chuyen tien|cong an|ma otp)\b/gi) || []).length;
  return vietnameseMarks + viWords * 2 > 1 ? "vi" : "en";
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function foldKeepLen(value) {
  let output = "";
  for (const character of String(value || "")) {
    if (character === "đ" || character === "Đ") {
      output += "d";
      continue;
    }
    const stripped = character.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    output += (stripped.length === 1 ? stripped : character).toLocaleLowerCase();
  }
  return output;
}

function extractUrls(text) {
  const pattern = /(?:https?:\/\/|www\.)[^\s<>"']+|(?:[a-z0-9-]+\.)+(?:com|net|org|vn|xyz|top|site|click|shop|info|online|vip|cc|io|me|app|live|icu|win|tk|ml|ga|cf)(?:\/[^\s<>"']*)?/gi;
  const urls = [];
  for (const match of text.matchAll(pattern)) {
    if (match.index > 0 && text[match.index - 1] === "@") continue;
    urls.push(match[0].replace(/[),.;!?]+$/, ""));
  }
  return [...new Set(urls)];
}

function scoreUrl(rawUrl) {
  const prepared = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
  let host = "";
  try {
    host = new URL(prepared).hostname.toLocaleLowerCase().replace(/^www\./, "");
  } catch {
    host = rawUrl.replace(/^https?:\/\//i, "").replace(/^www\./i, "").split(/[/?#]/)[0].toLocaleLowerCase();
  }

  let score = 12;
  const reasonKeys = [];
  const add = (points, key) => {
    score = Math.max(score, points);
    if (!reasonKeys.includes(key)) reasonKeys.push(key);
  };

  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) add(75, "ip");
  if (host.includes("xn--")) add(72, "punycode");
  if (rawUrl.includes("@")) add(70, "at");
  if (urlShorteners.includes(host)) add(60, "shortener");
  if (riskyTlds.includes(host.split(".").pop())) add(58, "tld");

  Object.entries(brandDomains).forEach(([brand, officialDomains]) => {
    const mentionsBrand = host.includes(brand);
    const isOfficial = officialDomains.some((domain) => host === domain || host.endsWith(`.${domain}`));
    if (mentionsBrand && !isOfficial) add(68, "brand");
  });

  return {
    url: rawUrl,
    host,
    score,
    level: score >= 65 ? "high" : score >= 40 ? "medium" : "low",
    reasonKeys
  };
}

function urlReasonLabels(reasonKeys) {
  const labels = {
    vi: {
      ip: "dùng địa chỉ IP",
      punycode: "tên miền punycode",
      at: "chứa ký tự @",
      shortener: "link rút gọn",
      tld: "đuôi tên miền rủi ro",
      brand: "có dấu hiệu nhái thương hiệu"
    },
    en: {
      ip: "uses an IP address",
      punycode: "punycode domain",
      at: "contains @",
      shortener: "shortened link",
      tld: "often-abused domain ending",
      brand: "possible brand impersonation"
    }
  };
  return reasonKeys.map((key) => labels[state.locale][key]).filter(Boolean);
}

function findRuleEvidence(text) {
  const evidence = [];
  const lowerText = text.toLocaleLowerCase();
  const foldedText = foldKeepLen(text);

  ruleDefinitions.forEach((rule) => {
    rule.patterns.forEach((pattern) => {
      let fromIndex = 0;
      const foldedPattern = foldKeepLen(pattern);
      while (fromIndex < foldedText.length) {
        const index = foldedText.indexOf(foldedPattern, fromIndex);
        if (index === -1) break;
        evidence.push({
          type: rule.id,
          label: localizeLabel(rule.labels),
          text: text.slice(index, index + foldedPattern.length),
          start: index,
          end: index + foldedPattern.length,
          weight: rule.weight
        });
        fromIndex = index + foldedPattern.length;
      }
    });
  });

  extractUrls(text).forEach((url) => {
    const index = lowerText.indexOf(url.toLocaleLowerCase());
    const assessment = scoreUrl(url);
    const reasons = urlReasonLabels(assessment.reasonKeys);
    evidence.push({
      type: "url",
      label: reasons.length
        ? `${state.locale === "vi" ? "Liên kết rủi ro" : "Risky link"}: ${reasons.join(", ")}`
        : (state.locale === "vi" ? "Liên kết cần kiểm tra độc lập" : "Link needs independent verification"),
      text: url,
      start: index,
      end: index + url.length,
      weight: assessment.score >= 65 ? 28 : assessment.score >= 40 ? 18 : 8,
      urlAssessment: assessment
    });
  });

  const detectedTypes = new Set(evidence.map((item) => item.type));
  comboDefinitions.forEach((combo) => {
    if (!combo.required.every((type) => detectedTypes.has(type))) return;
    const label = localizeLabel(combo.labels);
    evidence.push({
      type: combo.id,
      label,
      text: label,
      start: -1,
      end: -1,
      weight: combo.weight,
      inferred: true
    });
  });

  const unique = new Map();
  evidence.forEach((item) => {
    const key = `${item.type}:${item.start}:${item.end}`;
    if (!unique.has(key)) unique.set(key, item);
  });
  return [...unique.values()].sort((a, b) => a.start - b.start || b.end - a.end);
}

function classifyScamTypes(text, score, sourceType) {
  if (sourceType === "file") {
    return [{ id: "file", label: currentCopy("fileTechnical"), confidence: Math.min(94, Math.max(51, score + 8)) }];
  }
  if (sourceType === "phone") {
    return [{ id: "phone", label: currentCopy("phoneCheck"), confidence: 100 }];
  }

  const folded = foldKeepLen(text);
  const ranked = scamTypeDefinitions
    .map((type) => {
      const hits = type.keywords.filter((keyword) => folded.includes(foldKeepLen(keyword))).length;
      return {
        id: type.id,
        label: localizeLabel(type.labels),
        hits,
        confidence: Math.min(96, Math.round(45 + hits * 12 + score * .18))
      };
    })
    .filter((type) => type.hits > 0)
    .sort((a, b) => b.hits - a.hits || b.confidence - a.confidence)
    .slice(0, 3);

  if (!ranked.length) {
    return [{ id: "other", label: currentCopy("otherType"), confidence: Math.max(32, Math.round(score * .65)) }];
  }
  return ranked;
}

function buildActions(typeId, sourceType) {
  const key = sourceType === "file" ? "file" : sourceType === "phone" ? "phone" : typeId;
  return actionCatalog[key]?.[state.locale] || actionCatalog.common[state.locale];
}

function riskFromScore(score) {
  if (score >= 66) return "high";
  if (score >= 34) return "medium";
  return "low";
}

function normalizeRiskScore(rawScore) {
  if (rawScore <= 25) return rawScore;
  if (rawScore <= 60) return Math.round(rawScore * .9);
  if (rawScore <= 100) return Math.round(54 + (rawScore - 60) * .75);
  return Math.min(96, Math.round(84 + (rawScore - 100) * .25));
}

function createTextAnalysis(text, sourceType, technicalIndicators = []) {
  const evidence = findRuleEvidence(text);
  const strongestByType = new Map();
  evidence.forEach((item) => {
    strongestByType.set(item.type, Math.max(strongestByType.get(item.type) || 0, item.weight));
  });
  const rawRuleScore = [...strongestByType.values()].reduce((total, weight) => total + weight, 0);
  const normalizedRuleScore = normalizeRiskScore(rawRuleScore);
  const technicalScore = technicalIndicators.reduce((total, item) => total + (item.weight || 0), 0);
  const contextBonus = evidence.length >= 3 ? 7 : evidence.length === 2 ? 4 : 0;
  const base = text.trim() ? 7 : 0;
  const foldedText = foldKeepLen(text);
  const protectiveHits = protectivePhrases.filter((phrase) => foldedText.includes(foldKeepLen(phrase))).length;
  const protectiveDampening = Math.min(protectiveHits, 2) * 12;
  const ruleOnlyScore = Math.max(0, Math.min(100, base + normalizedRuleScore + contextBonus - protectiveDampening));
  const mlProbability = window.SCS_mlProb ? window.SCS_mlProb(text) : null;
  const hasMlScore = Number.isFinite(mlProbability);
  const indicatorPart = Math.min(100, technicalScore);
  const urlPart = evidence.reduce((highest, item) => Math.max(highest, item.urlAssessment?.score || 0), 0);
  const supportPart = Math.max(indicatorPart, urlPart);
  const blendedScore = hasMlScore
    ? .45 * mlProbability * 100 + .40 * ruleOnlyScore + .15 * supportPart
    : ruleOnlyScore + technicalScore;
  const score = Math.max(0, Math.min(100, Math.round(blendedScore)));
  const riskLevel = riskFromScore(score);
  const scamTypes = classifyScamTypes(text, score, sourceType);
  const confidence = Math.min(96, Math.max(38, Math.round(45 + evidence.length * 6 + technicalIndicators.length * 5 + (hasMlScore ? 6 : 0))));

  return {
    sourceType,
    rawText: text,
    detectedLanguage: detectLanguage(text),
    score,
    riskLevel,
    confidence,
    evidence,
    indicators: technicalIndicators,
    scamTypes,
    actions: buildActions(scamTypes[0].id, sourceType),
    rawRuleScore,
    normalizedRuleScore,
    protectiveDampening,
    mlProbability: hasMlScore ? mlProbability : null,
    engine: hasMlScore ? "hybrid" : "rules",
    safeReply: safeReplies[state.locale],
    createdAt: new Date().toISOString()
  };
}

function validatePhoneNumberFallback(raw, country) {
  const hasInvalidChars = /[^\d+().\s-]/.test(raw);
  let digits = raw.replace(/\D/g, "");
  let normalized = "";
  let valid = false;

  if (country === "VN") {
    if (digits.startsWith("84") && digits.length === 11) {
      normalized = `+${digits}`;
      valid = /^84(?:3|5|7|8|9)\d{8}$/.test(digits);
    } else if (digits.startsWith("0") && digits.length === 10) {
      normalized = `+84${digits.slice(1)}`;
      valid = /^0(?:3|5|7|8|9)\d{8}$/.test(digits);
    }
  } else if (country === "US") {
    if (digits.startsWith("1") && digits.length === 11) {
      normalized = `+${digits}`;
      valid = /^1[2-9]\d{9}$/.test(digits);
    } else if (digits.length === 10) {
      normalized = `+1${digits}`;
      valid = /^[2-9]\d{9}$/.test(digits);
    }
  } else {
    normalized = raw.trim().startsWith("+") ? `+${digits}` : digits;
    valid = raw.trim().startsWith("+") && digits.length >= 8 && digits.length <= 15;
  }

  if (hasInvalidChars) valid = false;
  return {
    raw,
    country,
    normalized: normalized || raw.trim(),
    e164: normalized || raw.trim(),
    national: raw.trim(),
    region: country === "OTHER" ? null : country,
    type: "unknown",
    carrier: null,
    premium: false,
    valid,
    hasInvalidChars
  };
}

function analyzePhoneNumber(raw, country) {
  const hasInvalidChars = /[^\d+().\s-]/.test(raw);
  const digits = raw.replace(/\D/g, "");
  const nationalCandidate = country === "VN" && digits.startsWith("84") ? `0${digits.slice(2)}` : digits;
  if (country === "VN" && /^1900\d{4,6}$/.test(nationalCandidate) && !hasInvalidChars) {
    return {
      raw,
      country,
      normalized: nationalCandidate,
      e164: nationalCandidate,
      national: nationalCandidate,
      region: "VN",
      type: "PREMIUM_RATE",
      carrier: null,
      premium: true,
      valid: true,
      hasInvalidChars
    };
  }

  const library = window.libphonenumber;
  const region = country === "OTHER" ? undefined : country;
  const parsed = library?.parsePhoneNumberFromString?.(raw, region);
  if (!parsed) return validatePhoneNumberFallback(raw, country);

  let nationalDigits = String(parsed.nationalNumber || "").replace(/\D/g, "");
  if (parsed.country === "VN" && nationalDigits && !nationalDigits.startsWith("0")) {
    nationalDigits = `0${nationalDigits}`;
  }
  const carrier = parsed.country === "VN"
    ? vnCarriers.find((item) => item.prefixes.includes(nationalDigits.slice(0, 3)))?.name || null
    : null;
  const type = parsed.getType?.() || "unknown";

  return {
    raw,
    country,
    normalized: parsed.number || raw.trim(),
    e164: parsed.number || raw.trim(),
    national: parsed.formatNational?.() || raw.trim(),
    region: parsed.country || region || null,
    type,
    carrier,
    premium: type === "PREMIUM_RATE",
    valid: !hasInvalidChars && parsed.isValid(),
    hasInvalidChars
  };
}

function createPhoneAnalysis() {
  const raw = $("#phoneInput").value.trim();
  if (!raw) return null;
  const phone = analyzePhoneNumber(raw, $("#countrySelect").value);
  const indicators = [
    {
      id: phone.valid ? "valid_format" : "invalid_format",
      label: phone.valid ? currentCopy("validFormat") : currentCopy("invalidFormat"),
      detail: phone.e164 || phone.normalized,
      weight: phone.valid ? 0 : 24
    }
  ];
  if (phone.type && phone.type !== "unknown") {
    indicators.push({
      id: "phone_type",
      label: state.locale === "vi" ? "Loại số" : "Number type",
      detail: phone.type,
      weight: phone.premium ? 36 : 0
    });
  }
  if (phone.carrier) {
    indicators.push({
      id: "phone_carrier",
      label: state.locale === "vi" ? "Nhà mạng theo đầu số" : "Carrier by prefix",
      detail: `${phone.carrier} • ${state.locale === "vi" ? "có thể đã chuyển mạng" : "may have been ported"}`,
      weight: 0
    });
  }
  const score = phone.premium ? 72 : phone.valid ? 8 : 31;
  const result = createTextAnalysis(raw, "phone", indicators);
  result.score = score;
  result.riskLevel = riskFromScore(score);
  result.confidence = 100;
  result.phone = phone;
  result.scamTypes = classifyScamTypes(raw, score, "phone");
  result.actions = buildActions("phone", "phone");
  return result;
}

function getActiveInput() {
  switch (state.activeType) {
    case "text":
      return { text: $("#textInput").value.trim(), indicators: [] };
    case "voice":
      return { text: $("#voiceTranscript").value.trim(), indicators: [] };
    case "image":
      return {
        text: $("#imageTranscript").value.trim(),
        indicators: state.imageFile ? [{ id: "image_input", label: "OCR / Image", detail: state.imageFile.type, weight: 0 }] : []
      };
    case "video":
      return {
        text: $("#videoTranscript").value.trim(),
        indicators: state.videoFile ? [{ id: "video_input", label: "Keyframe / Video", detail: formatBytes(state.videoFile.size), weight: 0 }] : []
      };
    case "file":
      return {
        text: state.selectedFile ? state.selectedFile.name : "",
        indicators: state.fileResult?.indicators || []
      };
    default:
      return { text: "", indicators: [] };
  }
}

function createAnalysisForActiveType() {
  if (state.activeType === "phone") return createPhoneAnalysis();
  const input = getActiveInput();
  if (!input.text && !input.indicators.length) return null;
  const result = createTextAnalysis(input.text, state.activeType, input.indicators);
  if (state.activeType === "file" && state.fileResult) {
    result.file = {
      name: state.selectedFile.name,
      size: state.selectedFile.size,
      type: state.selectedFile.type || "unknown",
      hash: state.fileResult.hash
    };
  }
  return result;
}

function updateLanguageDetection() {
  const text = $("#textInput").value;
  $("#charCount").textContent = text.length.toLocaleString(state.locale === "vi" ? "vi-VN" : "en-US");
  if (!text.trim()) {
    $("#detectedLanguage span").textContent = state.locale === "vi" ? "Tự nhận diện ngôn ngữ" : "Auto-detect language";
    return;
  }
  const detected = detectLanguage(text);
  $("#detectedLanguage span").textContent = detected === "vi" ? "Tiếng Việt" : "English";
}

function runProcessing(result) {
  const card = $("#processingCard");
  const steps = $$(".processing-steps span", card);
  const titles = state.locale === "vi"
    ? ["Đang trích xuất nội dung...", "Đang quét dấu hiệu thao túng...", "Đang phân loại ngữ cảnh...", "Đang tạo hướng dẫn an toàn..."]
    : ["Extracting content...", "Scanning manipulation signals...", "Classifying the context...", "Creating safety guidance..."];
  card.hidden = false;
  $("#results").hidden = true;
  card.scrollIntoView({ behavior: "smooth", block: "center" });

  let step = 0;
  const update = () => {
    $("#processingTitle").textContent = titles[step];
    $("#processingBar").style.width = `${(step + 1) * 25}%`;
    steps.forEach((item, index) => item.classList.toggle("is-active", index <= step));
    if (step < 3) {
      step += 1;
      window.setTimeout(update, 330);
    } else {
      window.setTimeout(() => {
        card.hidden = true;
        renderResult(result, true);
        $("#results").hidden = false;
        $("#results").scrollIntoView({ behavior: "smooth", block: "start" });
        const heading = $("#results-title");
        heading.setAttribute("tabindex", "-1");
        window.setTimeout(() => heading.focus({ preventScroll: true }), 420);
      }, 330);
    }
  };
  update();
}

function riskText(result) {
  if (result.sourceType === "phone") {
    return {
      title: result.phone?.premium
        ? (state.locale === "vi" ? "Số dịch vụ tính phí" : "Premium-rate service number")
        : result.phone?.valid ? currentCopy("validFormat") : currentCopy("invalidFormat"),
      summary: result.phone?.premium
        ? currentCopy("phonePremiumSummary")
        : result.phone?.valid ? currentCopy("phoneValidSummary") : currentCopy("phoneInvalidSummary")
    };
  }
  return {
    title: currentCopy(`${result.riskLevel}Title`),
    summary: currentCopy(`${result.riskLevel}Summary`)
  };
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderHighlightedText(container, text, evidence) {
  container.replaceChildren();
  if (!text) {
    container.textContent = currentCopy("noEvidence");
    return;
  }

  const nonOverlapping = [];
  evidence
    .filter((item) => item.start >= 0)
    .sort((a, b) => a.start - b.start || b.end - a.end)
    .forEach((item) => {
      const previous = nonOverlapping.at(-1);
      if (!previous || item.start >= previous.end) nonOverlapping.push(item);
    });

  let cursor = 0;
  nonOverlapping.forEach((item) => {
    if (item.start > cursor) {
      container.append(document.createTextNode(text.slice(cursor, item.start)));
    }
    const mark = createElement("mark", "", text.slice(item.start, item.end));
    mark.dataset.kind = item.type;
    mark.title = localizedEvidenceLabel(item);
    container.append(mark);
    cursor = item.end;
  });
  if (cursor < text.length) {
    container.append(document.createTextNode(text.slice(cursor)));
  }
}

function renderRedFlags(result) {
  const grid = $("#redFlagGrid");
  grid.replaceChildren();
  const flagMap = new Map();
  result.evidence.forEach((item) => {
    const current = flagMap.get(item.type);
    if (!current || item.weight > current.weight) {
      flagMap.set(item.type, { ...item, label: localizedEvidenceLabel(item) });
    }
  });
  result.indicators.forEach((item) => {
    if (!flagMap.has(item.id)) {
      flagMap.set(item.id, { type: item.id, label: item.label, weight: item.weight || 0 });
    }
  });

  if (!flagMap.size) {
    const empty = createElement("div", "red-flag-item");
    const symbol = createElement("i", "flag-symbol is-safe", "✓");
    symbol.setAttribute("aria-hidden", "true");
    empty.append(symbol, createElement("span", "", state.locale === "vi" ? "Chưa thấy dấu hiệu cụ thể" : "No specific signal found"));
    grid.append(empty);
    return;
  }

  [...flagMap.values()].slice(0, 8).forEach((item) => {
    const node = createElement("div", "red-flag-item");
    const symbol = createElement("i", `flag-symbol ${item.weight ? "is-warning" : "is-info"}`, item.weight ? "!" : "i");
    symbol.setAttribute("aria-hidden", "true");
    node.append(
      symbol,
      createElement("span", "", item.label),
      createElement("b", "", item.weight ? `+${item.weight}` : "INFO")
    );
    grid.append(node);
  });
}

function selectedUrgentStatuses() {
  return Object.fromEntries($$("[data-status]").map((input) => [input.dataset.status, input.checked]));
}

function combinedActions(result) {
  const statuses = selectedUrgentStatuses();
  const urgent = [];
  ["clicked", "shared", "paid"].forEach((key) => {
    if (statuses[key]) urgent.push(...urgentActions[key][state.locale]);
  });
  return [
    ...urgent.map((text) => ({ text, urgent: true })),
    ...result.actions.map((text) => ({ text, urgent: false }))
  ];
}

function renderActionList(result) {
  const actionList = $("#actionList");
  actionList.replaceChildren();
  const actions = combinedActions(result);
  actions.forEach((action) => {
    const item = createElement("li", action.urgent ? "is-urgent" : "", action.text);
    actionList.append(item);
  });
  result.renderedActions = actions.map((action) => action.text);
}

function renderResult(result, shouldSave = false) {
  const isNewResult = state.currentResult !== result;
  state.currentResult = result;
  const score = Math.max(0, Math.min(100, result.score));
  const circumference = 452.4;
  const color = result.riskLevel === "high" ? "var(--danger)" : result.riskLevel === "medium" ? "var(--warning)" : "var(--safe)";
  const riskCopy = riskText(result);

  $("#resultScore").textContent = score;
  $("#gaugeValue").style.strokeDashoffset = String(circumference * (1 - score / 100));
  $("#gaugeValue").style.stroke = color;
  $("#resultRiskPill").className = `result-risk-pill ${result.riskLevel}`;
  $("#resultRiskPill").textContent = currentCopy(result.riskLevel);
  $("#resultRiskTitle").textContent = riskCopy.title;
  $("#resultRiskSummary").textContent = riskCopy.summary;
  $("#resultConfidence").textContent = `${result.confidence}%`;

  const primaryType = result.scamTypes[0];
  $("#scamTypeTitle").textContent = localizedTypeLabel(primaryType);
  $("#typeConfidence").textContent = `${primaryType.confidence}%`;
  const typeList = $("#scamTypeList");
  typeList.replaceChildren();
  result.scamTypes.slice(1).forEach((type) => typeList.append(createElement("span", "", `${localizedTypeLabel(type)} ${type.confidence}%`)));

  $("#evidenceCount").textContent = String(result.evidence.length);
  renderHighlightedText($("#highlightedEvidence"), result.rawText, result.evidence);
  renderRedFlags(result);

  result.actions = buildActions(primaryType.id, result.sourceType);
  if (isNewResult) {
    $$("[data-status]").forEach((input) => {
      input.checked = false;
    });
  }
  renderActionList(result);
  $("#safeReplyText").textContent = safeReplies[state.locale];

  if (shouldSave && $("#historyConsent").checked) {
    saveHistory(result);
  }
}

function saveHistory(result) {
  const history = readHistory();
  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    sourceType: result.sourceType,
    score: result.score,
    riskLevel: result.riskLevel,
    typeId: result.scamTypes[0]?.id || "other",
    labelVi: scamTypeDefinitions.find((item) => item.id === result.scamTypes[0]?.id)?.labels.vi || result.scamTypes[0]?.label || copy.vi.otherType,
    labelEn: scamTypeDefinitions.find((item) => item.id === result.scamTypes[0]?.id)?.labels.en || result.scamTypes[0]?.label || copy.en.otherType,
    preview: redactSensitive(result.rawText).slice(0, 180),
    createdAt: result.createdAt
  };
  history.unshift(entry);
  localStorage.setItem("scamshield_history", JSON.stringify(history.slice(0, 30)));
  renderHistory();
  showToast(currentCopy("historySaved"));
}

function readHistory() {
  try {
    const stored = JSON.parse(localStorage.getItem("scamshield_history") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function renderHistory() {
  const history = readHistory();
  const list = $("#historyList");
  const empty = $("#historyEmpty");
  list.replaceChildren();
  empty.hidden = history.length > 0;
  list.hidden = history.length === 0;

  history.forEach((entry) => {
    const card = createElement("article", "history-item");
    const head = createElement("div", "history-item-head");
    head.append(
      createElement("span", "", entry.sourceType),
      createElement("span", "", new Intl.DateTimeFormat(state.locale === "vi" ? "vi-VN" : "en-US", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(new Date(entry.createdAt)))
    );
    const title = state.locale === "vi" ? entry.labelVi : entry.labelEn;
    const risk = createElement("span", `history-risk result-risk-pill ${entry.riskLevel}`, `${currentCopy(entry.riskLevel)} • ${entry.score}/100`);
    card.append(head, createElement("h3", "", title), createElement("p", "", entry.preview || "—"), risk);
    list.append(card);
  });
}

function exportCurrentResult() {
  const result = state.currentResult;
  if (!result) return;
  const reportActions = combinedActions(result).map((item) => item.text);
  const date = new Intl.DateTimeFormat(state.locale === "vi" ? "vi-VN" : "en-US", {
    dateStyle: "long",
    timeStyle: "short"
  }).format(new Date(result.createdAt));
  const lines = state.locale === "vi"
    ? [
      "SCAM SHIELD - BÁO CÁO PHÂN TÍCH",
      `Thời gian: ${date}`,
      `Nguồn: ${result.sourceType}`,
      `Điểm rủi ro: ${result.score}/100 (${currentCopy(result.riskLevel)})`,
      `Phân loại: ${result.scamTypes.map((item) => `${localizedTypeLabel(item)} ${item.confidence}%`).join(", ")}`,
      "",
      "DẤU HIỆU:",
      ...result.evidence.map((item) => `- ${localizedEvidenceLabel(item)}: “${redactSensitive(item.text)}”`),
      ...result.indicators.map((item) => `- ${item.label}: ${redactSensitive(item.detail || "")}`),
      "",
      "KẾ HOẠCH AN TOÀN:",
      ...reportActions.map((item, index) => `${index + 1}. ${item}`),
      "",
      `Câu trả lời an toàn: ${safeReplies.vi}`,
      "",
      "Lưu ý: Đây là công cụ hỗ trợ quyết định, không bảo đảm kết luận tuyệt đối. Hãy xác minh qua kênh chính thức."
    ]
    : [
      "SCAM SHIELD - ANALYSIS REPORT",
      `Time: ${date}`,
      `Source: ${result.sourceType}`,
      `Risk score: ${result.score}/100 (${currentCopy(result.riskLevel)})`,
      `Classification: ${result.scamTypes.map((item) => `${localizedTypeLabel(item)} ${item.confidence}%`).join(", ")}`,
      "",
      "SIGNALS:",
      ...result.evidence.map((item) => `- ${localizedEvidenceLabel(item)}: “${redactSensitive(item.text)}”`),
      ...result.indicators.map((item) => `- ${item.label}: ${redactSensitive(item.detail || "")}`),
      "",
      "SAFETY PLAN:",
      ...reportActions.map((item, index) => `${index + 1}. ${item}`),
      "",
      `Safe reply: ${safeReplies.en}`,
      "",
      "Note: This decision-support tool does not guarantee an absolute conclusion. Verify through official channels."
    ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `scam-shield-report-${new Date().toISOString().slice(0, 10)}.txt`;
  link.click();
  URL.revokeObjectURL(url);
  showToast(currentCopy("exportDone"));
}

async function copySafeReply() {
  try {
    await navigator.clipboard.writeText(safeReplies[state.locale]);
    showToast(currentCopy("copied"));
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = safeReplies[state.locale];
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    showToast(currentCopy(copied ? "copied" : "copyFailed"));
  }
}

function speakResult() {
  if (!state.currentResult || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const result = state.currentResult;
  const summary = `${riskText(result).title}. ${combinedActions(result).map((item) => item.text).join(". ")}`;
  const utterance = new SpeechSynthesisUtterance(summary);
  utterance.lang = state.locale === "vi" ? "vi-VN" : "en-US";
  utterance.rate = state.familyMode ? .88 : 1;
  speechSynthesis.speak(utterance);
}

async function toggleRecording() {
  if (state.mediaRecorder?.state === "recording") {
    state.mediaRecorder.stop();
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    showToast(currentCopy("recordDenied"));
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.recordingStream = stream;
    state.recordingChunks = [];
    state.mediaRecorder = new MediaRecorder(stream);
    state.mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size) state.recordingChunks.push(event.data);
    });
    state.mediaRecorder.addEventListener("stop", () => {
      window.clearInterval(state.recordingTimer);
      const blob = new Blob(state.recordingChunks, { type: state.mediaRecorder.mimeType || "audio/webm" });
      const audio = $("#audioPreview");
      audio.src = URL.createObjectURL(blob);
      audio.hidden = false;
      state.recordingStream.getTracks().forEach((track) => track.stop());
      $("#recordButton").classList.remove("is-recording");
      $("#recordStatus").textContent = currentCopy("recordReady");
    });
    state.mediaRecorder.start();
    state.recordingSeconds = 0;
    $("#recordButton").classList.add("is-recording");
    $("#recordStatus").textContent = currentCopy("recordStart");
    $("#recordTimer").textContent = "00:00";
    state.recordingTimer = window.setInterval(() => {
      state.recordingSeconds += 1;
      const seconds = String(state.recordingSeconds % 60).padStart(2, "0");
      const minutes = String(Math.floor(state.recordingSeconds / 60)).padStart(2, "0");
      $("#recordTimer").textContent = `${minutes}:${seconds}`;
      if (state.recordingSeconds >= 60) state.mediaRecorder.stop();
    }, 1000);
  } catch {
    showToast(currentCopy("recordDenied"));
  }
}

function startDictation() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast(currentCopy("speechUnsupported"));
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = state.locale === "vi" ? "vi-VN" : "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;
  let finalText = $("#voiceTranscript").value.trim();
  recognition.onstart = () => showToast(currentCopy("speechStart"));
  recognition.onresult = (event) => {
    let interim = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript;
      if (event.results[index].isFinal) finalText = `${finalText} ${transcript}`.trim();
      else interim += transcript;
    }
    $("#voiceTranscript").value = `${finalText} ${interim}`.trim();
    autoResizeTextarea($("#voiceTranscript"));
  };
  recognition.onerror = () => showToast(currentCopy("speechUnsupported"));
  recognition.start();
}

function bindDropZone(zone, input) {
  ["dragenter", "dragover"].forEach((eventName) => zone.addEventListener(eventName, (event) => {
    event.preventDefault();
    zone.classList.add("is-dragging");
  }));
  ["dragleave", "drop"].forEach((eventName) => zone.addEventListener(eventName, (event) => {
    event.preventDefault();
    zone.classList.remove("is-dragging");
  }));
  zone.addEventListener("drop", (event) => {
    const file = event.dataTransfer.files[0];
    if (!file) return;
    const transfer = new DataTransfer();
    transfer.items.add(file);
    input.files = transfer.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

async function handleImageSelection(file) {
  if (!file || !["image/png", "image/jpeg", "image/webp"].includes(file.type) || file.size > 8 * 1024 * 1024) {
    showToast(currentCopy("invalidFile"));
    return;
  }
  if (state.imageUrl) URL.revokeObjectURL(state.imageUrl);
  state.imageFile = file;
  state.imageUrl = URL.createObjectURL(file);
  $("#imagePreview").src = state.imageUrl;
  $("#imageFileName").textContent = file.name;
  $("#imageFileMeta").textContent = `${file.type} • ${formatBytes(file.size)}`;
  $("#imagePreviewWrap").hidden = false;
  await detectQrFromImage(file);
}

async function detectQrFromImage(file) {
  try {
    const canvas = document.createElement("canvas");
    let source;
    if ("createImageBitmap" in window) {
      source = await createImageBitmap(file);
    } else {
      source = await new Promise((resolve, reject) => {
        const image = new Image();
        const objectUrl = URL.createObjectURL(file);
        image.onload = () => {
          URL.revokeObjectURL(objectUrl);
          resolve(image);
        };
        image.onerror = () => {
          URL.revokeObjectURL(objectUrl);
          reject(new Error("Image decode failed"));
        };
        image.src = objectUrl;
      });
    }
    const maxSide = 1600;
    const scale = Math.min(1, maxSide / Math.max(source.width, source.height));
    canvas.width = Math.max(1, Math.round(source.width * scale));
    canvas.height = Math.max(1, Math.round(source.height * scale));
    canvas.getContext("2d", { willReadFrequently: true }).drawImage(source, 0, 0, canvas.width, canvas.height);
    if (source.close) source.close();
    const values = await decodeQrCanvas(canvas);
    if (values.length) {
      const qrText = values.join("\n");
      const target = $("#imageTranscript");
      target.value = `${target.value.trim()}\n[QR] ${qrText}`.trim();
      autoResizeTextarea(target);
      showToast(currentCopy("qrFound"));
    }
  } catch {
    // QR detection is an enhancement; manual transcript remains available.
  }
}

async function decodeQrCanvas(canvas) {
  if ("BarcodeDetector" in window) {
    try {
      const formats = await BarcodeDetector.getSupportedFormats();
      if (formats.includes("qr_code")) {
        const detector = new BarcodeDetector({ formats: ["qr_code"] });
        const codes = await detector.detect(canvas);
        if (codes.length) return codes.map((code) => code.rawValue).filter(Boolean);
      }
    } catch {
      // Continue to the cross-browser jsQR fallback.
    }
  }

  if (window.jsQR) {
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const result = window.jsQR(imageData.data, imageData.width, imageData.height);
    if (result?.data) return [result.data];
  }
  return [];
}

function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (window.Tesseract) resolve();
      else existing.addEventListener("load", resolve, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

async function runOcr() {
  if (!state.imageFile) {
    showToast(currentCopy("emptyInput"));
    return;
  }
  const progress = $("#ocrProgress");
  const progressBar = $("i", progress);
  const progressText = $("span", progress);
  progress.hidden = false;
  progressBar.style.width = "5%";
  progressText.textContent = currentCopy("ocrLoading");
  try {
    if (!window.Tesseract) {
      await loadExternalScript("https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js");
    }
    const result = await window.Tesseract.recognize(state.imageFile, "vie+eng", {
      logger: (message) => {
        const value = Math.round((message.progress || 0) * 100);
        progressBar.style.width = `${Math.max(5, value)}%`;
        progressText.textContent = `OCR ${value}%`;
      }
    });
    const current = $("#imageTranscript").value.trim();
    const qrLines = current.split("\n").filter((line) => line.startsWith("[QR]"));
    $("#imageTranscript").value = `${result.data.text.trim()}\n${qrLines.join("\n")}`.trim();
    autoResizeTextarea($("#imageTranscript"));
    progressBar.style.width = "100%";
    progressText.textContent = `OCR 100% • ${Math.round(result.data.confidence)}% confidence`;
    showToast(currentCopy("ocrDone"));
  } catch {
    progress.hidden = true;
    showToast(currentCopy("ocrFailed"));
  }
}

function handleVideoSelection(file) {
  if (!file || !["video/mp4", "video/webm"].includes(file.type) || file.size > 30 * 1024 * 1024) {
    showToast(currentCopy("invalidFile"));
    return;
  }
  if (state.videoUrl) URL.revokeObjectURL(state.videoUrl);
  state.videoFile = file;
  state.videoUrl = URL.createObjectURL(file);
  const video = $("#videoPreview");
  video.src = state.videoUrl;
  $("#videoPreviewWrap").hidden = false;
  $("#frameButton").hidden = false;
  $("#frameStrip").replaceChildren();
  video.addEventListener("loadedmetadata", () => {
    if (video.duration > 60) {
      state.videoFile = null;
      showToast(currentCopy("invalidFile"));
      video.removeAttribute("src");
      $("#videoPreviewWrap").hidden = true;
      $("#frameButton").hidden = true;
    }
  }, { once: true });
}

function seekVideo(video, time) {
  return new Promise((resolve, reject) => {
    const onSeek = () => {
      video.removeEventListener("error", onError);
      resolve();
    };
    const onError = () => {
      video.removeEventListener("seeked", onSeek);
      reject(new Error("Video seek failed"));
    };
    video.addEventListener("seeked", onSeek, { once: true });
    video.addEventListener("error", onError, { once: true });
    video.currentTime = Math.min(Math.max(0, time), Math.max(0, video.duration - .05));
  });
}

async function extractVideoFrames() {
  const video = $("#videoPreview");
  if (!state.videoFile || !Number.isFinite(video.duration)) {
    showToast(currentCopy("emptyInput"));
    return;
  }
  const strip = $("#frameStrip");
  strip.replaceChildren();
  const count = Math.min(6, Math.max(2, Math.ceil(video.duration / 5)));
  const canvas = document.createElement("canvas");
  const scale = Math.min(1, 720 / video.videoWidth);
  canvas.width = Math.max(1, Math.round(video.videoWidth * scale));
  canvas.height = Math.max(1, Math.round(video.videoHeight * scale));
  const context = canvas.getContext("2d", { willReadFrequently: false });
  const originalTime = video.currentTime;
  try {
    for (let index = 0; index < count; index += 1) {
      const time = count === 1 ? 0 : (video.duration - .1) * (index / (count - 1));
      await seekVideo(video, time);
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = createElement("img");
      image.src = canvas.toDataURL("image/jpeg", .68);
      image.alt = `${state.locale === "vi" ? "Keyframe tại" : "Keyframe at"} ${time.toFixed(1)}s`;
      strip.append(image);
    }
    await seekVideo(video, originalTime);
    showToast(currentCopy("framesDone"));
  } catch {
    showToast(currentCopy("invalidFile"));
  }
}

function bytesToAscii(bytes, limit = 2 * 1024 * 1024) {
  const safeLength = Math.min(bytes.length, limit);
  let output = "";
  const chunkSize = 32768;
  for (let index = 0; index < safeLength; index += chunkSize) {
    output += String.fromCharCode(...bytes.subarray(index, Math.min(index + chunkSize, safeLength)));
  }
  return output;
}

function extensionOf(name) {
  const match = name.toLocaleLowerCase().match(/\.([^.]+)$/);
  return match ? match[1] : "";
}

function inspectMagic(bytes) {
  const first = Array.from(bytes.slice(0, 8));
  if (first[0] === 0x25 && first[1] === 0x50 && first[2] === 0x44 && first[3] === 0x46) return "pdf";
  if (first[0] === 0x50 && first[1] === 0x4b) return "zip";
  if (first[0] === 0x89 && first[1] === 0x50 && first[2] === 0x4e && first[3] === 0x47) return "png";
  if (first[0] === 0xff && first[1] === 0xd8) return "jpg";
  if (first[0] === 0x4d && first[1] === 0x5a) return "exe";
  return "unknown";
}

async function scanSelectedFile(file) {
  if (!file || file.size > 20 * 1024 * 1024) {
    showToast(currentCopy("invalidFile"));
    return;
  }
  state.selectedFile = file;
  state.fileResult = null;
  $("#fileInspection").hidden = false;
  $("#fileName").textContent = file.name;
  $("#fileMeta").textContent = `${file.type || "unknown MIME"} • ${formatBytes(file.size)}`;
  $("#fileScanState").textContent = currentCopy("scanningFile");
  $("#hashBox").hidden = true;

  try {
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    const extension = extensionOf(file.name);
    const magic = inspectMagic(bytes);
    const ascii = bytesToAscii(bytes);
    const indicators = [];
    const dangerousExtensions = ["exe", "scr", "bat", "cmd", "js", "vbs", "msi", "ps1"];
    const officeExtensions = ["docx", "xlsx", "pptx", "docm", "xlsm", "pptm"];
    const imageExtensions = ["png", "jpg", "jpeg", "webp"];

    if (/\.(?:pdf|docx?|xlsx?|jpe?g|png)\.(?:exe|scr|bat|cmd|js|vbs|msi)$/i.test(file.name)) {
      indicators.push({ id: "double_extension", label: state.locale === "vi" ? "Đuôi tệp kép nguy hiểm" : "Dangerous double extension", detail: file.name, weight: 38 });
    }
    if (dangerousExtensions.includes(extension)) {
      indicators.push({ id: "executable", label: state.locale === "vi" ? "Định dạng có thể thực thi" : "Executable file type", detail: `.${extension}`, weight: 34 });
    }
    if (magic === "exe" && !dangerousExtensions.includes(extension)) {
      indicators.push({ id: "magic_mismatch", label: state.locale === "vi" ? "Nội dung EXE không khớp tên tệp" : "EXE content does not match filename", detail: `${magic} ≠ .${extension}`, weight: 42 });
    }
    if (magic === "pdf" && extension !== "pdf") {
      indicators.push({ id: "mime_mismatch", label: state.locale === "vi" ? "Định dạng PDF không khớp đuôi" : "PDF content does not match extension", detail: `${magic} ≠ .${extension}`, weight: 18 });
    }
    if (magic === "png" && !imageExtensions.includes(extension)) {
      indicators.push({ id: "mime_mismatch", label: state.locale === "vi" ? "Nội dung ảnh không khớp đuôi" : "Image content does not match extension", detail: `${magic} ≠ .${extension}`, weight: 15 });
    }
    if (officeExtensions.includes(extension) && magic !== "zip") {
      indicators.push({ id: "office_mismatch", label: state.locale === "vi" ? "Cấu trúc Office không hợp lệ" : "Invalid Office container", detail: `${magic} ≠ zip`, weight: 22 });
    }
    if (/vbaProject\.bin/i.test(ascii) || ["docm", "xlsm", "pptm"].includes(extension)) {
      indicators.push({ id: "macro", label: state.locale === "vi" ? "Có chỉ báo macro" : "Macro indicator found", detail: "vbaProject.bin / macro-enabled", weight: 35 });
    }
    if (/\/JavaScript|\/OpenAction|\/Launch/i.test(ascii)) {
      indicators.push({ id: "pdf_active", label: state.locale === "vi" ? "PDF có hành vi chủ động" : "Active PDF behavior", detail: "/JavaScript, /OpenAction or /Launch", weight: 32 });
    }
    if (/externalLinks\//i.test(ascii)) {
      indicators.push({ id: "external_link", label: state.locale === "vi" ? "Tài liệu có liên kết ngoài" : "Document contains external links", detail: "externalLinks/", weight: 17 });
    }
    if (file.size === 0) {
      indicators.push({ id: "empty_file", label: state.locale === "vi" ? "Tệp rỗng" : "Empty file", detail: "0 B", weight: 8 });
    }
    if (!indicators.length) {
      indicators.push({
        id: "no_local_indicator",
        label: state.locale === "vi" ? "Chưa thấy chỉ báo rủi ro cục bộ" : "No local risk indicator found",
        detail: state.locale === "vi" ? "Không đồng nghĩa tệp an toàn tuyệt đối" : "This does not guarantee the file is safe",
        weight: 0
      });
    }

    let hash = "unavailable";
    if (crypto.subtle) {
      const digest = await crypto.subtle.digest("SHA-256", buffer);
      hash = Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    }
    state.fileResult = { indicators, hash, magic };
    $("#fileHash").textContent = hash;
    $("#hashBox").hidden = false;
    $("#fileScanState").textContent = currentCopy("fileScanned");
  } catch {
    state.fileResult = {
      indicators: [{ id: "read_error", label: state.locale === "vi" ? "Không thể đọc tệp" : "Could not read file", detail: file.name, weight: 12 }],
      hash: "unavailable",
      magic: "unknown"
    };
    $("#fileScanState").textContent = currentCopy("fileScanned");
  }
}

function updateQuiz() {
  const items = quizItems[state.locale];
  const item = items[state.quizIndex % items.length];
  const question = $("#quizText");
  const feedback = $("#quizFeedback");
  const buttons = $$("[data-quiz-answer]");
  question.classList.remove("is-changing");
  void question.offsetWidth;
  question.classList.add("is-changing");
  $("#quizText").textContent = item.text;
  $("#quizProgress").textContent = `${(state.quizIndex % items.length) + 1} / ${items.length}`;
  $("#quizScore").textContent = `${state.quizScore} ${currentCopy("quizScore")}`;
  $("#quizProgressBar").style.width = `${((state.quizIndex + 1) / items.length) * 100}%`;
  $("#quizNextButton").textContent = state.quizIndex === items.length - 1
    ? (state.locale === "vi" ? "Làm lại từ đầu" : "Restart quiz")
    : (state.locale === "vi" ? "Câu tiếp theo" : "Next question");
  feedback.hidden = true;
  feedback.classList.remove("is-wrong");
  buttons.forEach((button) => {
    button.disabled = false;
    button.removeAttribute("aria-pressed");
  });
  state.quizAnswered = false;
}

function answerQuiz(answer) {
  if (state.quizAnswered) return;
  const items = quizItems[state.locale];
  const item = items[state.quizIndex % items.length];
  const feedback = $("#quizFeedback");
  const isCorrect = answer === item.answer;
  state.quizAnswered = true;
  if (isCorrect) state.quizScore += 1;
  $("#quizScore").textContent = `${state.quizScore} ${currentCopy("quizScore")}`;
  $("#quizFeedbackTitle").textContent = isCorrect ? currentCopy("quizCorrect") : currentCopy("quizWrong");
  $("#quizFeedbackText").textContent = item.explanation;
  feedback.classList.toggle("is-wrong", !isCorrect);
  feedback.hidden = false;
  $$("[data-quiz-answer]").forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-pressed", String(button.dataset.quizAnswer === answer));
  });
}

function nextQuizQuestion() {
  const items = quizItems[state.locale];
  if (!state.quizAnswered) return;
  if (state.quizIndex === items.length - 1) {
    state.quizIndex = 0;
    state.quizScore = 0;
  } else {
    state.quizIndex += 1;
  }
  updateQuiz();
}

function resetAnalysisView() {
  $("#results").hidden = true;
  $("#analyzer").scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindEvents() {
  $("#themeToggle").addEventListener("click", () => applyTheme(state.theme === "light" ? "dark" : "light"));
  $("#languageToggle").addEventListener("click", () => applyLanguage(state.locale === "vi" ? "en" : "vi"));
  $("#familyToggle").addEventListener("click", () => applyFamilyMode(!state.familyMode));
  $("#mobileMenuToggle").addEventListener("click", () => setMobileMenu(!state.mobileMenuOpen));
  $$(".mobile-nav a").forEach((link) => link.addEventListener("click", () => setMobileMenu(false)));

  $$(".analyzer-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const tabs = $$(".analyzer-tab");
      const current = tabs.indexOf(tab);
      let next;
      if (event.key === "Home") next = tabs[0];
      else if (event.key === "End") next = tabs.at(-1);
      else {
        const offset = event.key === "ArrowRight" ? 1 : -1;
        next = tabs[(current + offset + tabs.length) % tabs.length];
      }
      switchTab(next.dataset.tab);
      next.focus();
    });
  });

  $$("[data-jump-tab]").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.jumpTab, true)));
  $$(".scam-type-card").forEach((button) => button.addEventListener("click", () => renderScamDemo(button.dataset.scamType)));
  $("#useScamDemoButton").addEventListener("click", useCurrentScamDemo);
  $$("textarea").forEach((textarea) => {
    textarea.addEventListener("input", () => autoResizeTextarea(textarea));
    autoResizeTextarea(textarea);
  });
  $("#textInput").addEventListener("input", updateLanguageDetection);
  $("#clearTextButton").addEventListener("click", () => {
    $("#textInput").value = "";
    autoResizeTextarea($("#textInput"));
    updateLanguageDetection();
    $("#textInput").focus();
  });
  $$("[data-sample]").forEach((button) => button.addEventListener("click", () => {
    $("#textInput").value = demoSamples[state.locale][button.dataset.sample];
    autoResizeTextarea($("#textInput"));
    updateLanguageDetection();
  }));
  $("#heroDemoButton").addEventListener("click", () => {
    switchTab("text", true);
    $("#textInput").value = demoSamples[state.locale].bank;
    autoResizeTextarea($("#textInput"));
    updateLanguageDetection();
  });

  $("#analyzeButton").addEventListener("click", () => {
    const result = createAnalysisForActiveType();
    if (!result) {
      showToast(currentCopy("emptyInput"));
      return;
    }
    runProcessing(result);
  });

  $("#newAnalysisButton").addEventListener("click", resetAnalysisView);
  $("#copyReplyButton").addEventListener("click", copySafeReply);
  $("#exportButton").addEventListener("click", exportCurrentResult);
  $("#speakResultButton").addEventListener("click", speakResult);
  $$("[data-status]").forEach((input) => input.addEventListener("change", () => {
    if (state.currentResult) renderActionList(state.currentResult);
  }));

  $("#recordButton").addEventListener("click", toggleRecording);
  $("#dictateButton").addEventListener("click", startDictation);

  bindDropZone($("#imageDropZone"), $("#imageInput"));
  $("#imageInput").addEventListener("change", (event) => handleImageSelection(event.target.files[0]));
  $("#ocrButton").addEventListener("click", runOcr);

  $("#videoInput").addEventListener("change", (event) => handleVideoSelection(event.target.files[0]));
  $("#frameButton").addEventListener("click", extractVideoFrames);
  $("#fileInput").addEventListener("change", (event) => scanSelectedFile(event.target.files[0]));

  $$("[data-phone]").forEach((button) => button.addEventListener("click", () => {
    $("#phoneInput").value = button.dataset.phone;
  }));

  $$("[data-quiz-answer]").forEach((button) => button.addEventListener("click", () => answerQuiz(button.dataset.quizAnswer)));
  $("#quizNextButton").addEventListener("click", nextQuizQuestion);
  $("#deleteHistoryButton").addEventListener("click", () => {
    localStorage.removeItem("scamshield_history");
    renderHistory();
    showToast(currentCopy("historyDeleted"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.mobileMenuOpen) {
      setMobileMenu(false);
      $("#mobileMenuToggle").focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020 && state.mobileMenuOpen) setMobileMenu(false);
  });

  window.addEventListener("beforeunload", () => {
    if (state.imageUrl) URL.revokeObjectURL(state.imageUrl);
    if (state.videoUrl) URL.revokeObjectURL(state.videoUrl);
    if (state.recordingStream) state.recordingStream.getTracks().forEach((track) => track.stop());
  });
}

function initialize() {
  captureVietnameseText();
  applyTheme(state.theme);
  applyFamilyMode(state.familyMode);
  bindEvents();
  switchTab(state.activeType);
  updateLanguageDetection();
  renderHistory();
  renderScamDemo(state.activeScamType);
  updateQuiz();
  applyLanguage(state.locale);
  initializeHoverboard();
  initializeScrollReveal();
  initializeActiveNavigation();
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  $("#speechSupport").textContent = SpeechRecognition ? "STT READY" : "MANUAL";
}

initialize();
