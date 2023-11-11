import {
  Calculator,
  Brain,
  Business,
  Community,
  Computer,
  Graph,
  Heart,
  IT,
  Paint,
  Physics,
  Language,
  Category,
} from "../../assets/Icons";
export const items = [
  {
    id: 1,
    courseName:
      "Lập trình digital và hoạt ảnh cho hoạt hình 2D, kèm tài liệu chất lượng",
    ratingStar: 5.0,
    Fullname: "Lê Ngọc Sơn", //TutorName
    coursePrice: 700000,
    courseImageURLURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING

    courseMajor: { courseMajorName: "Lập trình" },
  },
  {
    id: 2,
    courseName: "Thiết kế web cơ bản với HTML & CSS",
    ratingStar: 5.0,
    Fullname: "Nguyễn Minh Châu", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Lập trình" },
  },
  {
    id: 3,
    courseName: "Lập trình Python cho người mới bắt đầu",
    ratingStar: 5.0,
    Fullname: "Phạm Bảo Ngọc", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Lập trình" },
  },
  {
    id: 4,
    courseName: "Khám phá Machine Learning cho người mới bắt đầu",
    ratingStar: 5.0,
    Fullname: "Đỗ Thị Lan", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Khoa học máy tính" },
  },
  {
    id: 5,
    courseName: "Phát triển ứng dụng mobile với React Native",
    ratingStar: 5.0,
    Fullname: "Lý Văn B", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Lập trình" },
  },
  {
    id: 6,
    courseName: "Thiết kế đồ họa cơ bản với Adobe Illustrator",
    ratingStar: 5.0,
    Fullname: "Nguyễn Thanh Tùng", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Thiết kế" },
  },
  {
    id: 7,
    courseName: "Nhập môn quản lý dự án Agile với Scrum",
    ratingStar: 5.0,
    Fullname: "Phạm Thu Hằng", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Quản lý sản phẩm" },
  },
  {
    id: 8,
    courseName: "Nhập môn Digital Marketing",
    ratingStar: 5.0,
    Fullname: "Trần Ngọc Mai", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Thiết kế" },
  },
  {
    id: 9,
    courseName: "Nghệ thuật nhiếp ảnh và kỹ thuật chụp ảnh cơ bản",
    ratingStar: 5.0,
    Fullname: "Lê Thị Dung", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Nghệ thuật" },
  },
  {
    id: 10,
    courseName: "Nhập môn quản lý dự án Agile với Scrum",
    ratingStar: 5.0,
    Fullname: "Phạm Thu Hằng", //TutorName
    coursePrice: 99000,
    courseImageURL:
      "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70", //MISSING
    courseMajor: { courseMajorName: "Quản lý sản phẩm" },
  },
];

export const categories = [
  { id: 0, icon: Category, courseMajorName: "Tất cả" },
  { id: 1, icon: Calculator, courseMajorName: "Toán học & Logic" },
  { id: 2, icon: Business, courseMajorName: "Kinh doanh" },
  { id: 3, icon: IT, courseMajorName: "Công nghệ thông tin" },
  { id: 4, icon: Computer, courseMajorName: "Khoa học máy tính" },
  { id: 5, icon: Paint, courseMajorName: "Nghệ thuật & Nhân văn" },
  { id: 6, icon: Graph, courseMajorName: "Khoa học dữ liệu" },
  { id: 7, icon: Community, courseMajorName: "Khoa học xã hội" },
  { id: 8, icon: Physics, courseMajorName: "Vật lý & Kĩ thuật" },
  { id: 9, icon: Brain, courseMajorName: "Phát triển cá nhân" },
  { id: 10, icon: Heart, courseMajorName: "Sức khỏe" },
  { id: 11, icon: Language, courseMajorName: "ngôn ngữ" },
];
